import {
  Button,
  Layout,
  List,
  Card,
  Image,
  Modal,
  Badge,
  Form,
  Input,
  Avatar,
  Col,
  Space,
  Row,
  Divider,
  Menu,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CommentOutlined, StarOutlined, UserAddOutlined, UsergroupAddOutlined, UsergroupDeleteOutlined } from "@ant-design/icons";
import {
  get_user_info,
  get_art_comments,
  get_art_favourites,
  upload_comment,
  upload_favourite,
  follow,
  get_followers,
  get_followings,
  get_favourites,
} from "../store/axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center'
};
const User = ({ id }) => {
  const navigate = useNavigate();
  const { token, user_id } = useSelector((state) => state.login);
  console.log("user ids", id, user_id)
  if(id == user_id) {
    
    navigate("/profile");
  }
  const [isLoading, setLoading] = useState(true); // Loading state
  const [data, setArtItems] = useState([]);
  const [userData, setUserData] = useState();
  const [commentData, setCommentData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);
  const [listData, setData] = useState([]);
  const [listTitle, setTitle] = useState("");

  const [artItemId, setArtItemId] = useState(0);
  const [open, setOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [favouritesOpen, setFavouritesOpen] = useState(false);

  const handleOkFavourites = () => {
    setTimeout(() => {
      setFavouritesOpen(false);
    }, 3000);
  };

  const handleCancelFavourites = () => {
    setFavouritesOpen(false);
  };

  const newFavourites = async () => {
    const response = await upload_favourite({
      token: token,
      art_item_id: artItemId,
      date: moment().format("YYYY-MM-DD"),
    });
    console.log(response.status);
  };

  const handleOkComment = () => {
    setTimeout(() => {
      setCommentOpen(false);
    }, 3000);
  };

  const handleCancelComment = () => {
    setCommentOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const getFollowers = async () => {
      const response = await get_followers({
        token: token,
        user_id: id,
      });
      if (response.status === 200 || response.status === 201) {
        var arr = response.data.followers;
        setData(arr);
        setTitle("Followers")
        setOpen(true);
      }
  };

  const getFollowings = async () => {
    const response = await get_followings({
      token: token,
      user_id: id,
    });
    if (response.status === 200 || response.status === 201) {
      var arr = response.data.followings;
      setData(arr);
      setTitle("Followings")
      setOpen(true);
    }
};

  const changeProfilePicture = (value) => {
    console.log("profile picture update", value)
  };

  const newComment = async (e) => {
    const response = await upload_comment({
      token: token,
      art_item_id: artItemId,
      text: e.comment,
      date: moment().format("YYYY-MM-DD"),
    });
    console.log(response.status);
  };

  const followUser = async () => {
    const response = await follow({
      token: token,
      user_id: userData.id,
      date: moment().format("YYYY-MM-DD"),
    });
    console.log(response.status);
  };

  const handleClick = async (values, key) => {
    console.log("Success:", values, key);
    setArtItemId(values.id);
    if (key === "comment") {
      const response = await get_art_comments({
        token: token,
        art_id: values.id,
      });
      if (response.status === 200 || response.status === 201) {
        var arr = response.data.comments;
        var userTempData = response.data;
        setCommentData(arr);
        setUserData(userTempData);
        setCommentOpen(true);
      }
    }
    if (key === "favourite") {
      const response = await get_art_favourites({
        token: token,
        art_id: values.id,
      });
      if (response.status === 200 || response.status === 201) {
        var arr = response.data.favourites;
        setFavouritesData(arr);
        setFavouritesOpen(true);
      }
    }
  };

  const postedArts = async () => {
    setLoading(true);
    const response = await get_user_info({ token: token, user_id: id }).then((result) => {
      if (result.status === 200 || result.status === 201) {
        console.log("get_user_info", result.data);
        var arr = result.data["art_items:"];
        setArtItems(arr);
        setLoading(false); //set loading state
      }
    });
  };
  
  const favouriteArts = async () => {
    setLoading(true);
    const response = await get_favourites({ token: token, user_id: id }).then((result) => {
      if (result.status === 200 || result.status === 201) {
        console.log("get_user_info", result.data);
        var arr = result.data.favourites;
        setArtItems(arr);
        setLoading(false); //set loading state
      }
    });
  };

  useEffect(() => {
    // useEffect hook
    setTimeout(() => {
      get_user_info({ token: token, user_id: id }).then((result) => {
        if (result.status === 200 || result.status === 201) {
          console.log("get_user_info", result.data);
          var userTempData = result.data;
          var arr = result.data["art_items:"];
          setUserData(userTempData);
          setArtItems(arr);
          setLoading(false); //set loading state
        }
      });
    });
  }, [favouritesOpen, commentOpen, open]);

  if (isLoading) {
    return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>Loading the data {console.log("loading state")}</div>
  );
  }

  return (
    <Layout>
      <Navbar />
      <>
        <Row><Divider/>
          <Col span={7}>
            {" "}
            <Space
            align="center"
            style={{display: "flex",width: '100%', justifyContent: 'center', alignItems: 'center'}}
            >
              <Image
              width={300}
                  preview={false}
                  alt="example"
                  src={userData.profile_img_url}
                  onClick={() => changeProfilePicture(userData)}
                />
            </Space>
          </Col>
          <Divider type="vertical" />
          <Col span={7}>
            <Space
              direction="vertical"
              style={{display: "flex"}}
            >
              
              <Card title="User Info" >
                <p>
                  <b>Username:</b> {userData.username}
                </p>
                <p>
                  <b>Email:</b> {userData.email}
                </p>
                <p>
                  <b>Birthdate:</b> {userData.birthdate}
                </p>
                <p>
                  <b>Name:</b> {userData.name}
                </p>
                <p>
                  <b>Location:</b> {userData.location}
                </p>
              </Card>
            </Space>
          </Col>
          <Divider type="vertical" />
          <Col span={7}>
            <Space
              direction="vertical"
              style={{ width: '100%'}}
            >
              <Button size="large" shape="round" block icon={<UsergroupAddOutlined />} onClick={getFollowers}>
                Followers
              </Button><Divider/>
              <Button size="large" shape="round" block icon={<UsergroupDeleteOutlined />} onClick={getFollowings}>
                Followings
              </Button><Divider/> 
              <Button disabled={userData.is_following} size="large" shape="round" block icon={<UserAddOutlined />} onClick={followUser}>
                Follow User
              </Button>
            </Space>
          </Col>
        </Row>
      </>
      <Divider/>
      <Menu style={centerStyle} mode="horizontal" theme='dark' defaultSelectedKeys={['post']}>
      <Menu.Item key="post"  onClick={postedArts} style={{ width: '35%', textAlign: 'center'  }}>
        Posted Art Items
      </Menu.Item>
      <Menu.Item key="favourites"  onClick={favouriteArts} style={{ width: '35%', textAlign: 'center'  }}>
        Favourite Art Items
      </Menu.Item>
      </Menu>
      <Divider />
      <List
        grid={{
          column: 4,
          gutter: 16,
        }}
        loading={isLoading}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={
                <Image
                  height={300}
                  preview={false}
                  alt="example"
                  src={item.img_url}
                  onClick={() => handleClick(item)}
                />
              }
              actions={[
                <a onClick={() => handleClick(item, "comment")}>
                  <Badge count={item.comment_count} showZero={true}>
                    <CommentOutlined />
                  </Badge>
                </a>,
                <a onClick={() => handleClick(item, "favourite")}>
                  <Badge count={item.favourite_count} showZero={true}>
                    <StarOutlined />
                  </Badge>
                </a>,
              ]}
            >
              <Meta title={item.owner_name} description={item.description} />
              <br/>
              <p><b>Date:</b> {item.date}</p>
              <br/>
              <p><b>Tags:</b></p>
              <List
                  grid={{
                    column: 4,
                  }}
                  dataSource={item["tags:"]}
                  renderItem={(tag) => <List.Item>{tag}</List.Item>}
                />
            </Card>
          </List.Item>
        )}
      />
      <Modal
        open={commentOpen}
        title="Comments"
        onOk={handleOkComment}
        onCancel={handleCancelComment}
        footer={[
          <Form onFinish={newComment}>
            <Form.Item label="Comment" name="comment">
              <Input placeholder="Write comment" />
            </Form.Item>
            <Form.Item>
              <Button key="back" onClick={handleCancelComment}>
                Return
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>,
        ]}
      >
        <List
          dataSource={commentData}
          renderItem={(item) => (
            <List.Item>
              <Card bordered={false}>
                <p>
                  <b>User:</b> {item.owner_name}
                </p>
                <p>
                  <b>Date:</b> {item.date}
                </p>
                <p>
                  <b>Comment:</b>
                </p>
                <p>{item.text}</p>
              </Card>
            </List.Item>
          )}
        />
      </Modal>
      <Modal
        open={favouritesOpen}
        title="Favourites"
        onOk={handleOkFavourites}
        onCancel={handleCancelFavourites}
        footer={[
          <Button key="back" onClick={handleCancelFavourites}>
            Return
          </Button>,
          <Button key="back" onClick={newFavourites}>
            Favourite
          </Button>,
        ]}
      >
        <List
          dataSource={favouritesData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.profile_img_url} />}
                title={item.username}
                description={item.location}
              />
            </List.Item>
          )}
        />
      </Modal>
      <Modal
        open={open}
        title={listTitle}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <List
          dataSource={listData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.profile_img_url} />}
                title={item.username}
                description={item.location}
              />
            </List.Item>
          )}
        />
      </Modal>
    </Layout>
  );
};

export default User;
