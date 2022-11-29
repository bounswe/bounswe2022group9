import {
  Col,
  Layout,
  Row,
  Input,
  Space,
  Card,
  Pagination,
  Image,
  Typography,
  Divider,
} from "antd";
import { useNavigate } from "react-router-dom";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Logout as LogoutHelper } from "../utils/helper";

import { UserOutlined } from "@ant-design/icons";
import "./Profile.css";
import Colors from "../constants/Colors";
import { Homepage as HomepageHelper } from "../utils/helper";
const { Header, Content, Footer } = Layout;
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
const Profile = () => {
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
    const response = await HomepageHelper({ token });

    console.log("Success to home:", response);

    navigate("/home");
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
      <Content>
        <Row>
          <Col span={6}>
            <UserOutlined style={{ fontSize: "240px" }} />
            <br></br>
            <br></br>
            <Row>
              <Col span={2}></Col>
              <Col span={12}>Full Name:</Col>
            </Row>
            <br></br>
            <Divider>Description</Divider>
          </Col>
          <Col span={1}></Col>
          <Col span={5}>
            {" "}
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <br></br>
              <Card title="Followers" size="small">
                <p>User</p>
                <p>User2</p>
                <Pagination defaultCurrent={1} total={23} />
              </Card>
              <br></br>
              <Card title="Following" size="small">
                <p>User3</p>
                <p>User4</p>
                <Pagination defaultCurrent={1} total={23} />
              </Card>
            </Space>
          </Col>
          <Col span={1}></Col>
          <Col span={10}>
            <br></br>
            <br></br>
            <Card title="My Posts" size="large">
              <Image
                width={398}
                src="https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_1280.jpg"
              />
              <br></br>
              <br></br>
              <Pagination defaultCurrent={1} total={23} />
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default Profile;
