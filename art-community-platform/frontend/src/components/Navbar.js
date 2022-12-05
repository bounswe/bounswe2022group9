import {
    Col,
    Layout,
    Row,
    Input,
    Typography,
  } from "antd";
  import { useNavigate } from "react-router-dom";
  
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  import { Logout as LogoutHelper } from "../utils/helper";
  
  import Colors from "../constants/Colors";
  import "./Profile.css";
  import { homepage } from "../store/axios";
  const { Header } = Layout;
  const { Search } = Input;
  const { Text } = Typography;
  
  const buttonStyle = {
    fontSize: "20px",
    color: Colors.primary,
    cursor: "pointer",
  };
  
  const navbarStyle = {
    color: Colors.primaryDark,
    cursor: "pointer",
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
  
    return (
      <Layout>
        <Header style={navbarStyle}>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Text style={buttonStyle} onClick={sendToHome}>
                Home
              </Text>
            </Col>
            <Col span={2}></Col>
            <Col span={4}>
              <Text style={buttonStyle} onClick={sendToProfile}>
                Profile
              </Text>
            </Col>
            <Col span={6}>
              <Search placeholder="input search text" enterButton />{" "}
            </Col>
            <Col span={3}></Col>
            <Col span={3}>
              <Text style={buttonStyle} onClick={sendToSignout}>
                Sign Out
              </Text>
            </Col>
          </Row>
        </Header>
      </Layout>
    );
  };
  
  export default Navbar;
  