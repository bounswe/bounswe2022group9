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
  DatePicker,
  Typography,
  Menu,
} from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  CommentOutlined,
  StarOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import {
  get_user_info,
  upload_art,
  get_art_comments,
  get_art_favourites,
  upload_comment,
  upload_favourite,
  update_profile,
  get_followers,
  get_followings,
  get_favourites,
  get_user_exhibitions,
  create_exhibition,
} from "../store/axios";
import Navbar from "./Navbar";

const { Meta } = Card;
const { Text } = Typography;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center'
};
const User = () => {
  const navigate = useNavigate();
  const { token, user_id } = useSelector((state) => state.login);
  const [isLoading, setLoading] = useState(true); // Loading state
  const [data, setArtItems] = useState([]);
  const [userData, setUserData] = useState();
  const [commentData, setCommentData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);
  const [listData, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [listTitle, setTitle] = useState("");
  const [selected, setSelected] = useState('post');
  const [image64, setImage64] = useState("");

  const [type, setType] = useState("post");
  const [exhibitionDate, setExhibitionDate] = useState("1900-01-01");
  const [birthDate, setBirthDate] = useState("1900-01-01");
  const [artItemId, setArtItemId] = useState(0);
  const [open, setOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [favouritesOpen, setFavouritesOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [exhibitionOpen, setExhibitionOpen] = useState(false);

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
      user_id: user_id,
    });
    if (response.status === 200 || response.status === 201) {
      var arr = response.data.followers;
      setData(arr);
      setTitle("Followers");
      setOpen(true);
    }
  };

  const getFollowings = async () => {
    const response = await get_followings({
      token: token,
      user_id: user_id,
    });
    if (response.status === 200 || response.status === 201) {
      var arr = response.data.followings;
      setData(arr);
      setTitle("Followings");
      setOpen(true);
    }
  };

  const changeProfilePicture = (value) => {
    console.log("profile picture update", value);
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

  const handleCancelEdit = () => {
    setEditOpen(false);
  };

  const editProfile = async () => {
    setEditData(userData);
    setEditOpen(true);
  };

  const onChange = (date, dateString) => {
    setBirthDate(dateString);
  };

  const submitEditProfile = async (values) => {
    const response = await update_profile({
      token: token,
      user_id: userData.id,
      email: userData.email,
      name: values.name,
      birthdate: birthDate,
      image_url: userData.profile_img_url,
      location: values.location,
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
        setBirthDate(userTempData.birthdate);
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
    localStorage.setItem('image',values.img_url)
    if(key !== "favourite" && key !== "comment"){
    navigate("/art_item/"+values.id);
    }
  };
  const handleSearchExhibitionClick = (values) => {
    console.log("Success:", values);
    
    navigate("/exhibition/"+values.id.toString());
  };
  const postedArts = async () => {
    setLoading(true);
    const response = await get_user_info({ token: token, user_id: user_id }).then((result) => {
      if (result.status === 200 || result.status === 201) {
        console.log("get_user_info", result.data);
        var arr = result.data["art_items:"];
        setArtItems(arr);
        setSelected("post");
        setType("post");
        setLoading(false); //set loading state
      }
    });
  };
  
  const favouriteArts = async () => {
    setLoading(true);
    const response = await get_favourites({ token: token, user_id: user_id }).then((result) => {
      if (result.status === 200 || result.status === 201) {
        console.log("get_user_info", result.data);
        var arr = result.data.favourites;
        setArtItems(arr);
        setSelected("favourites");
        setType("favourites");
        setLoading(false); //set loading state
      }
    });
  };
  const exhibitions = async () => {
    setLoading(true);
    const response = await get_user_exhibitions({ token: token, user_id: user_id }).then((result) => {
      if (result.status === 200 || result.status === 201) {
        console.log("get_user_info", result.data);
        var arr = result.data.exhibitions;
        console.log("exhibitions")
        console.log(arr)
        const arr2 = arr.filter(item => item !== null)
        console.log(arr2)
        setArtItems(arr2);
        setSelected("exhibitions");
        setType("exhibitions");
        setLoading(false); //set loading state
      }
    });
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
      console.log("upload");
      console.log(base64);
    setImage64(base64);
  } 
  const handleCreate = () => {
    setCreateOpen(true);
  };
  const handleCreateCancel = () => {
    setCreateOpen(false);
  };
  const submitCreateArtItem = async (values) => {
    const response = await upload_art({
      token: token,
      owner_id: userData.id,
      base64: image64,
      description: values.description,
      tags: [values.tag1,values.tag2,values.tag3],
      date:  moment().format("YYYY-MM-DD"),
    });
    console.log(response.status);
  };

  const handleExhibition = () => {
    setExhibitionOpen(true);
  };
  const handleExhibitionCancel = () => {
    setExhibitionOpen(false);
  };
  const onDateChange = (date, dateString) => {
    setExhibitionDate(dateString);
  };
  const submitExhibition = async (values) => {
    const response = await create_exhibition({
      token: token,
      description: values.description,
      name: values.name,
      type: values.type,
      location: values.location,
      open_address: values.open_address,
      start_time: values.start_time,
      end_time: values.end_time,
      date: exhibitionDate,
      art_items: [],
    });
    console.log(response.status);
  };

  useEffect(() => {
    // useEffect hook
    setTimeout(() => {
      get_user_info({ token: token, user_id: user_id }).then((result) => {
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
  }, [favouritesOpen, commentOpen, open, editOpen]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Loading the data {console.log("loading state")}
      </div>
    );
  }

  return (
    <Layout>
      <Navbar />
      <>
        <Row>
          <Divider />
          <Col span={7}>
            {" "}
            <Space
              align="center"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
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
            <Space direction="vertical" style={{ display: "flex" }}>
              <Card title="User Info">
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
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button
                size="large"
                shape="round"
                block
                icon={<UsergroupAddOutlined />}
                onClick={getFollowers}
              >
                Followers
              </Button>
              <Divider />
              <Button
                size="large"
                shape="round"
                block
                icon={<UsergroupDeleteOutlined />}
                onClick={getFollowings}
              >
                Followings
              </Button>
              <Divider />
              <Button
                size="large"
                shape="round"
                block
                icon={<UserAddOutlined />}
                onClick={editProfile}
              >
                Edit Profile
              </Button>
              <Divider />
              <Button
                size="large"
                shape="round"
                block
                icon={<StarOutlined />}
                onClick={handleCreate}
              >
                Create Art Item
              </Button>
              <Divider />
              <Button
                size="large"
                shape="round"
                block
                icon={<CommentOutlined />}
                onClick={handleExhibition}
              >
                Create Exhibition
              </Button>
            </Space>
          </Col>
        </Row>
      </>
      <Divider />
      <Menu style={centerStyle} mode="horizontal" theme='dark' selectedKeys={selected}>
      <Menu.Item key="post"  onClick={postedArts} style={{ width: '15%', textAlign: 'center'  }}>
        Posted Art Items
      </Menu.Item>
      <Menu.Item key="favourites"  onClick={favouriteArts} style={{ width: '15%', textAlign: 'center'  }}>
        Favourite Art Items
      </Menu.Item>
      <Menu.Item key="exhibitions"  onClick={exhibitions} style={{ width: '15%', textAlign: 'center'  }}>
        Exhibitions
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
          type == "exhibitions" ?
<List.Item  onClick={() => handleSearchExhibitionClick(item)}>
            <Card
              hoverable
            >
              <Meta title={item.owner_name} description={item.description} />
              <p><b>Exhibition Name: {item.name}</b></p>
              <br/>
              <p><b>Date:</b> {item.date}</p>
              <p><b>Start Time:</b> {item.start_time}</p>
              <p><b>End Time:</b> {item.end_time}</p>
              <p><b>Location:</b> {item.location}</p>
              <p><b>Open Address:</b> {item.open_address}</p>
              <p><b>Type:</b> {item.type}</p>
              <List
        grid={{
          column: 4,
          gutter: 16,
        }}
        loading={isLoading}
        dataSource={item.art_items}
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
          </List.Item>

          : <List.Item>
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
      <Modal
        open={editOpen}
        title="Edit Profile"
        onCancel={handleCancelEdit}
        footer={[
          <Button key="back" onClick={handleCancelEdit}>
            Return
          </Button>,
        ]}
      >
        <Form name="basic" onFinish={submitEditProfile}>

          <Text strong>Name</Text>
          <Form.Item name="name" initialValue={editData.name}>
            <Input />
          </Form.Item>

          <Text strong>Birthdate</Text>
          <Form.Item name="birthdate">
            <DatePicker onChange={onChange} />
          </Form.Item>
{/* 
          <Text strong>Profile Picture</Text>
          <Form.Item name="image_url" initialValue={editData.profile_img_url}>
            <Input />
          </Form.Item> */}

          <Text strong>Location</Text>
          <Form.Item name="location" initialValue={editData.location}>
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
            }}
          >
            <Button type="primary" htmlType="submit" shape="round">
              Submit Form
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        open={createOpen}
        title="Create Art Item"
        onCancel={handleCreateCancel}
        footer={[
          <Button key="back" onClick={handleCreateCancel}>
            Return
          </Button>,
        ]}
      >
        <Form name="basic" onFinish={submitCreateArtItem}>
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
          <Text strong>Description</Text>
          <Form.Item name="description">
            <Input />
          </Form.Item>

          <Text strong>Tags</Text>
          <Form.Item name="tag1">
            <Input />
          </Form.Item>
          <Form.Item name="tag2">
            <Input />
          </Form.Item>
          <Form.Item name="tag3">
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
            }}
          >
            <Button type="primary" htmlType="submit" shape="round">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        open={exhibitionOpen}
        title="Create Exhibition"
        onCancel={handleExhibitionCancel}
        footer={[
          <Button key="back" onClick={handleExhibitionCancel}>
            Return
          </Button>,
        ]}
      >
        <Form name="basic" onFinish={submitExhibition}>
        <Text strong>Name</Text>
          <Form.Item name="name">
            <Input />
          </Form.Item>
          <Text strong>Description</Text>
          <Form.Item name="description">
            <Input />
          </Form.Item>
          <Text strong>Type</Text>
          <Form.Item name="type">
            <Input />
          </Form.Item>
          <Text strong>Date</Text>
          <Form.Item name="date" >
            <DatePicker onChange={onDateChange} />
          </Form.Item>
          <Text strong>Location</Text>
          <Form.Item name="location">
            <Input />
          </Form.Item>
          <Text strong>Open Address</Text>
          <Form.Item name="open_address">
            <Input />
          </Form.Item>
          <Text strong>Start Time</Text>
          <Form.Item name="start_time">
            <Input />
          </Form.Item>
          <Text strong>End Time</Text>
          <Form.Item name="end_time">
            <Input />
          </Form.Item>
          <Text strong>Art Items</Text>
          <Form.Item name="art_items">
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
            }}
          >
            <Button type="primary" htmlType="submit" shape="round">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default User;
