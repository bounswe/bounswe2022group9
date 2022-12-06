import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  DatePicker,
  Button,
  Checkbox,
  Typography,
  Row,
  Col,
  message,
} from "antd";
import "antd/dist/antd.css";
import Colors from "../constants/Colors";
import { Signup as SignupHelper } from "../utils/helper";

const { Text } = Typography;
const buttonStyle = {
  fontSize: "20px",
  color: Colors.primary,
  cursor: "pointer",
};
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [birthDate, setBirthDate] = useState("1900-01-01");
  const onFinish = async (values) => {
    console.log("Success:", values);
    if (values.password === values.passwordSecond) {
      const response = await SignupHelper(
        {
          username: values.username,
          email: values.email,
          password: values.password,
          name: values.name,
          birthdate: birthDate,
        },
        dispatch
      );
      if (response.status === 201) {
        navigate("/login");
      } else {
        message.error(response.response.data);
      }
    } else {
      message.error("Passwords are not equal");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date, dateString) => {
    setBirthDate(dateString);
  };
  return (
    <Row gutter={[0, 16]}>
      <Col span={24}></Col>
      <Col span={6} offset={9}>
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Text strong>Username</Text>
          <Form.Item
            name="username"
            required
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>

          <Text strong>Email</Text>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your e-mail!",
              },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Text strong>Name</Text>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Text strong>Birthdate</Text>
          <Form.Item
            name="birthdate"
            rules={[
              {
                required: true,
                message: "Please input your birthdate!",
              },
            ]}
          >
            <DatePicker onChange={onChange} />
          </Form.Item>

          <Text strong>Password</Text>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Text strong>Password </Text>
          <Form.Item
            name="passwordSecond"
            rules={[
              {
                required: true,
                message: "Please input your password again!",
              },
            ]}
          >
            <Input.Password placeholder="Enter password again" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" required>
            <Checkbox required>
              <a style={buttonStyle} href="##">
                Accepting the terms of GPDR and KVKK
              </a>
            </Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
            }}
          >
            <Button type="primary" htmlType="submit" shape="round">
              Submit Signup Form
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
