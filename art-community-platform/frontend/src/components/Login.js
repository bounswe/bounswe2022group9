import { Form, Input, Row, Col, Button, Typography, Space, message } from "antd";

import { useNavigate } from "react-router-dom";

import React from "react";
import { useDispatch } from "react-redux";

import { Login as LoginHelper } from "../utils/helper";

import { LoginOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Colors from "../constants/Colors";

const { Text } = Typography;
const buttonStyle = {
    fontSize: "20px",
    color: Colors.primary,
    cursor: "pointer",
  };


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log("Success:", values);
    const response = await LoginHelper(
      { username: values.username, password: values.password },
      dispatch
    );
    if (response.status === 200) {
        navigate("/profile");
      } else {
        message.error(response.response.data);
      }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const sendToSignup = () => {
    console.log("Sending to signup");
    navigate("/signup");
  };

  return (
    <Row gutter={[0, 16]}>
      <Col span={24}></Col>
      <Col span={6} offset={9}>
        <Form
          style={{ marginBottom: "20px" }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Text strong>Username</Text>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your username.",
              },
            ]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>

          <Text strong>Password</Text>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password.",
              },
            ]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Col span={24} align="middle">
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              icon={<LoginOutlined />}
            >
              Login
            </Button>
          </Col>
        </Form>
        <Col span={24} align="middle">
          <Space size={"large"}>
            <Text style={buttonStyle} onClick={sendToSignup}>
              Don't have an account?
            </Text>
          </Space>
        </Col>
      </Col>
    </Row>
  );
};

export default Login;
