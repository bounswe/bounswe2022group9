import { useNavigate } from "react-router-dom";

import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {OpenSeaDragonViewer} from "./Annotation"
import {
  Typography, 
  Image,
  List,
  Badge,
  Card
} from "antd";
import "antd/dist/antd.css";
import {
  CommentOutlined,
  StarOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import {
  get_user_info,
  get_art_info,
  get_art_favourites,
  upload_comment,
  upload_favourite,
  update_profile,
  get_followers,
  get_followings,
  get_favourites,
} from "../store/axios";
const { Meta } = Card;
const { Text } = Typography;
const ArtItem = ({id}) => {
  const { token ,user_id} = useSelector((state) => state.login);
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
  const image=localStorage.getItem('image')
  useEffect(() => {
    // useEffect hook
    setTimeout(() => {
      get_art_info({ token: token, art_id: id }).then((result) => {
        if (result.status === 200 || result.status === 201) {
          console.log("get_user_info", result.data);
          var arr = result.data;
          setArtItems(arr);
        }
      });
    });
  }, [favouritesOpen, commentOpen, open]);

  return (
    <Card
              hoverable
              cover={
                <Image
                  height={500}
                  alt="example"
                  src={data.img_url}
                />
              }
              actions={[
                
                  <Badge count={data.comment_count} showZero={true}>
                    <CommentOutlined />
                  </Badge>
                ,
                
                  <Badge count={data.favourite_count} showZero={true}>
                    <StarOutlined />
                  </Badge>
                ,
              ]}
            >
              <Meta title={data.owner_name} description={data.description} />
              <br/>
              <p><b>Date:</b> {data.date}</p>
              <br/>
              <p><b>Tags:</b></p>
              <List
                  grid={{
                    column: 4,
                  }}
                  dataSource={data["tags:"]}
                  renderItem={(tag) => <List.Item>{tag}</List.Item>}
                />
            </Card>
    // <Image
    //  src={image}
    //  preview={false}
    //  height={500}
    // />
    // <OpenSeaDragonViewer image={<Image
    //    src={image}
    //    preview={false}
    //    height={500}
    //   />} />
  );
};

export default ArtItem;
