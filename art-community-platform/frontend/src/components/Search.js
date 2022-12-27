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
  Menu,
  Divider,
} from "antd";

import { CommentOutlined, StarOutlined, UserAddOutlined, UsergroupAddOutlined, UsergroupDeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import moment from "moment";
import Navbar from "./Navbar";
import {
  get_users,
  get_search_result,
  get_art_favourites,
  get_art_comments,
  upload_comment,
  upload_favourite,
} from "../store/axios";

const { Meta } = Card;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center'
};
const Search = ({text}) => {
  const navigate = useNavigate();
  console.log("props", text)
  const { token } = useSelector((state) => state.login);
  const [isLoading, setLoading] = useState(true); // Loading state
  const [data, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("user");
  const [commentOpen, setCommentOpen] = useState(false);
  const [favouritesOpen, setFavouritesOpen] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);
  const [artItemId, setArtItemId] = useState(0);
  const [userData, setUserData] = useState();
  
  
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

  const searchUser = () => {
    setSearchType("user");
  };
  const searchArtItem = () => {
    setSearchType("artitem");
  };
  const searchExhibiton = () => {
    setSearchType("exhibition");
  };

  const handleSearchUserClick = (values) => {
    console.log("Success:", values);
    
    navigate("/user/"+values.id.toString());
  };

  const handleSearchArtItemClick = (values) => {
    console.log("Success:", values);
    
    navigate("/user/"+values.id.toString());
  };

  const handleSearchExhibitionClick = (values) => {
    console.log("Success:", values);
    
    navigate("/exhibition/"+values.id.toString());
  };

  const searchSubmit = (e) => {
    console.log(e.target.value);
    let temp = e.target.value;
    setSearchText(temp);
    navigate("/search/"+temp);
  };

  useEffect(() => {
    // useEffect hook
    setTimeout(() => {
      if(text == undefined){
        console.log("if true")
        get_users({ token: token, text: "", type: searchType }).then((result) => {
          if (result.status === 200 || result.status === 201) {
            console.log(result.data);
            var arr = result.data.users;
            console.log("user")
            console.log(arr)
            setSearchResults(arr);
            setLoading(false); //set loading state
          }
        });
      }
      else {
        console.log("if false")
        get_search_result({ token: token, text: text, type: searchType }).then((result) => {
          if (result.status === 200 || result.status === 201) {
            console.log(result.data);
            
            if(searchType == "user"){
              var arr = result.data.users;
              console.log("user")
              console.log(arr)
              const arr2 = arr.filter(item => item !== null)
              console.log(arr2)

              setSearchResults(arr2);
            }
            if(searchType == "artitem"){
              var arr = result.data.art_items;
              console.log("artitem")
              console.log(arr)
              const arr2 = arr.filter(item => item !== null)
              console.log(arr2)

              setSearchResults(arr2);
            }
            if(searchType == "exhibition"){
              var arr = result.data.exhibitions;
              console.log("exhibition")
              console.log(arr)
              const arr2 = arr.filter(item => item !== null)
              console.log(arr2)

              setSearchResults(arr2);
            }
            setLoading(false); //set loading state
          }
        });
      }
      
    });
  }, [searchText]);

  return (
    <Layout>
      <Navbar />
      <Form >
        <Form.Item label="Search" name="search">
          <Input placeholder="Search input" onChange={searchSubmit} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Divider/>
      <Menu style={centerStyle} mode="horizontal" theme='dark' defaultSelectedKeys={['searchUser']}>
      <Menu.Item key="searchUser"  onClick={searchUser} style={{ width: '15%', textAlign: 'center'  }}>
        Search User
      </Menu.Item>
      <Menu.Item key="searchArtItem"  onClick={searchArtItem} style={{ width: '15%', textAlign: 'center'  }}>
        Search Art Item
      </Menu.Item>
      <Menu.Item key="searchExhibiton"  onClick={searchExhibiton} style={{ width: '15%', textAlign: 'center'  }}>
        Search Exhibition
      </Menu.Item>
      </Menu>
      <Divider />
      <List
      grid={{
        column: 4,
        gutter: 16,
      }}
        size="large"
        loading={isLoading}
        dataSource={data}
        renderItem={(item) => (
          searchType == "user" ?
          <List.Item onClick={() => handleSearchUserClick(item)} style={{width: '100%', alignItems: 'center'}}>
            <List.Item.Meta
              style={{width: '100%', alignItems: 'center'}}
              avatar={<Avatar src={item.profile_img_url} />}
              title={item.username}
              description={item.name}
            />
          </List.Item>
          : searchType == "artitem" ?
          <List.Item  onClick={() => handleSearchArtItemClick(item)}>
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
          : searchType == "exhibition" ?
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
          </List.Item> : null
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

export default Search;
