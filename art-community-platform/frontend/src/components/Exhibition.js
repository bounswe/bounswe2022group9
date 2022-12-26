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
  unfollow,
  get_exhibition_info,
  get_followings,
  get_favourites,
  get_user_exhibitions,
} from "../store/axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center'
};
const Exhibition = ({ id }) => {
  const navigate = useNavigate();
  const { token, user_id } = useSelector((state) => state.login);
  console.log("user ids", id, user_id)
  if(id == user_id) {
    
    navigate("/profile");
  }
  const [isLoading, setLoading] = useState(true); // Loading state
  const [data, setArtItems] = useState([]);
  const [userData, setUserData] = useState();
  const [isFollowing, setIsFollowing] = useState(false);

  const [commentData, setCommentData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);

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

  const newComment = async (e) => {
    const response = await upload_comment({
      token: token,
      art_item_id: artItemId,
      text: e.comment,
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

  useEffect(() => {
    // useEffect hook
    setTimeout(() => {
      get_exhibition_info({ token: token, exhibition_id: id }).then((result) => {
        if (result.status === 200 || result.status === 201) {
          console.log("get_user_info", result.data);
          var userTempData = result.data;
          var arr = result.data;
          setUserData(userTempData);
          setIsFollowing(userTempData.isFollowing);
          setArtItems(arr);
          setLoading(false); //set loading state
        }
      });
    });
  }, [favouritesOpen, commentOpen, isFollowing]);

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
            <Card
              hoverable
            >
              <Meta title={data.owner_name} description={data.description} />
              <p><b>Exhibition Name: {data.name}</b></p>
              <br/>
              <p><b>Date:</b> {data.date}</p>
              <p><b>Start Time:</b> {data.start_time}</p>
              <p><b>End Time:</b> {data.end_time}</p>
              <p><b>Location:</b> {data.location}</p>
              <p><b>Open Address:</b> {data.open_address}</p>
              <p><b>Type:</b> {data.type}</p>
              <List
                grid={{
                  column: 4,
                  gutter: 16,
                }}
                loading={isLoading}
                dataSource={data.art_items}
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
            </Card>
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
    </Layout>
  );
};

export default Exhibition;
