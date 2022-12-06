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
} from "antd";

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";
import {
  get_users,
  get_search_result,
  get_art_favourites,
  upload_comment,
  upload_favourite,
} from "../store/axios";

const Search = ({text}) => {
  const navigate = useNavigate();
  console.log("props", text)
  const { token } = useSelector((state) => state.login);
  const [isLoading, setLoading] = useState(true); // Loading state
  const [data, setSearchResults] = useState([]);

  

  const handleClick = (values) => {
    console.log("Success:", values);
    
    navigate("/user/"+values.id.toString());
  };

  useEffect(() => {
    // useEffect hook
    setTimeout(() => {
      if(text == undefined){
        console.log("if true")
        get_users({ token: token }).then((result) => {
          if (result.status === 200 || result.status === 201) {
            console.log(result.data);
            var arr = result.data.users;
            setSearchResults(arr);
            setLoading(false); //set loading state
          }
        });
      }
      else {
        console.log("if false")
        get_search_result({ token: token, text: text }).then((result) => {
          if (result.status === 200 || result.status === 201) {
            console.log(result.data);
            var arr = result.data.art_items;
            setSearchResults(arr);
            setLoading(false); //set loading state
          }
        });
      }
      
    });
  }, []);

  return (
    <Layout>
      <Navbar />
      <List
        size="large"
        loading={isLoading}
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={() => handleClick(item)} style={{width: '100%', alignItems: 'center'}}>
              <List.Item.Meta
                style={{width: '100%', alignItems: 'center'}}
                avatar={<Avatar src={item.profile_img_url} />}
                title={item.username}
                description={item.name}
              />
            </List.Item>
        )}
      />
    </Layout>
  );
};

export default Search;
