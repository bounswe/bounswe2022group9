import {
    Layout,
    Menu,
  } from "antd";
  import { useNavigate } from "react-router-dom";
  
  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  import { Logout as LogoutHelper } from "../utils/helper";
  
  const { Header } = Layout;


  const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  };
  const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.login);
    const [selected, setSelected] = useState('Profile');
  
    const sendToSignout = (values) => {
      console.log("Success:", values.key);
      LogoutHelper({}, dispatch);
      navigate("/login");
    };
  
    const sendToHome = (values) => {
      console.log("Success to home:", values.key);
      setSelected(values.key);
  
      navigate("/homepage");
    };
  
    const sendToProfile = (values) => {
      console.log("Success:", values);
      setSelected(values.key);
  
      navigate("/profile");
    };

    const sendToSearch = (values) => {
        console.log("Success:", values);
        setSelected(values.key);
        navigate("/search");
      };

      const sendToExhibition = (values) => {
        console.log("Success:", values);
        setSelected(values.key);
        navigate("/exhibition/4");
      };

    return (
      <Layout>
        <Header>
            <Menu style={centerStyle} mode="horizontal" theme='dark' >
                <Menu.Item key="Home"  onClick={sendToHome} style={{ width: '15%', textAlign: 'center'  }}>
                    Home
                </Menu.Item>
                <Menu.Item key="Search"  onClick={sendToSearch} style={{ width: '15%', textAlign: 'center' }}>
                    Search
                </Menu.Item>
                <Menu.Item key="Exhibition"  onClick={sendToExhibition} style={{ width: '15%', textAlign: 'center' }}>
                Exhibition
                </Menu.Item>
                <Menu.Item key="Profile"  onClick={sendToProfile} style={{ width: '15%', textAlign: 'center' }}>
                    Profile
                </Menu.Item>
                <Menu.Item key="SignOut"  onClick={sendToSignout} style={{ width: '15%', textAlign: 'center' }}>
                    Sign Out
                </Menu.Item>
            </Menu>
        </Header>
      </Layout>
    );
  };
  
  export default Navbar;
  