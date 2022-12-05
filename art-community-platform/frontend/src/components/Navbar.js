import {
    Layout,
    Menu,
  } from "antd";
  import { useNavigate } from "react-router-dom";
  
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  import { Logout as LogoutHelper } from "../utils/helper";
  
  import { homepage } from "../store/axios";
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
  
    const sendToSignout = (values) => {
      console.log("Success:", values);
      LogoutHelper({}, dispatch);
      navigate("/login");
    };
  
    const sendToHome = async (values) => {
      console.log("Success to home:", token);
      const response = await homepage({ token });
  
      console.log("Success to home:", response);
  
      navigate("/dummy/3");
    };
  
    const sendToProfile = (values) => {
      console.log("Success:", values);
  
      navigate("/profile");
    };

    const sendToSearch = (values) => {
        console.log("Success:", values);
    
        navigate("/profile");
      };
  
    return (
      <Layout>
        <Header>
            <Menu style={centerStyle} mode="horizontal" defaultSelectedKeys={['Profile']} theme='dark' >
                <Menu.Item key="Home"  onClick={sendToHome} style={{ width: '25%', textAlign: 'center'  }}>
                    Home
                </Menu.Item>
                <Menu.Item key="Profile"  onClick={sendToProfile} style={{ width: '25%', textAlign: 'center' }}>
                    Profile
                </Menu.Item>
                <Menu.Item key="Search"  onClick={sendToSearch} style={{ width: '25%', textAlign: 'center' }}>
                    Search
                </Menu.Item>
                <Menu.Item key="SignOut"  onClick={sendToSignout} style={{ width: '25%', textAlign: 'center' }}>
                    Sign Out
                </Menu.Item>
            </Menu>
        </Header>
      </Layout>
    );
  };
  
  export default Navbar;
  