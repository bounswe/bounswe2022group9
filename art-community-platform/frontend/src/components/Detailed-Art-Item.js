import { useNavigate } from "react-router-dom";

import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  Typography, 
  Image
} from "antd";
import "antd/dist/antd.css";
import {
  get_user_info,
  get_art_comments,
  get_art_favourites,
  upload_comment,
  upload_favourite,
  update_profile,
  get_followers,
  get_followings,
  get_favourites,
} from "../store/axios";

const { Text } = Typography;
const ArtItem = ({text}) => {
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
      get_user_info({ token: token, user_id: user_id }).then((result) => {
        if (result.status === 200 || result.status === 201) {
          console.log("get_user_info", result.data);
          setLoading(false); //set loading state
        }
      });
    });
  }, [favouritesOpen, commentOpen, open]);

  return (
    <Image
     src={image}
     preview={false}
     height={600}
     width={500}
    />
  );
};

export default ArtItem;
