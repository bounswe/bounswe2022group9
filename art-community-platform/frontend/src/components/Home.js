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
  Avatar,Divider,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CommentOutlined, StarOutlined } from "@ant-design/icons";
import {
  homepage,
  get_art_comments,
  get_art_favourites,
  upload_comment,
  upload_favourite,
} from "../store/axios";
const { Meta } = Card;

const Home = () => {
  const { token } = useSelector((state) => state.login);
  const [isLoading, setLoading] = useState(true); // Loading state
  const [data, setArtItems] = useState([]);
  const [commentData, setCommentData] = useState([]);

  const [favouritesData, setFavouritesData] = useState([]);

  const [artItemId, setArtItemId] = useState(0);
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
        setCommentData(arr);
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
      homepage({ token: token }).then((result) => {
        if (result.status === 200 || result.status === 201) {
          console.log(result.data);
          var arr = result.data.art_items;
          setArtItems(arr);
          setLoading(false); //set loading state
        }
      });
    });
  }, [favouritesOpen, commentOpen]);

  return (
    <Layout>
      <Divider/>
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
    </Layout>
  );
};

export default Home;
