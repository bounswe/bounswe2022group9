import {
  Col,
  Layout,
  Row,
  Space,
  Card,
  Pagination,
  Image,
  Divider,
} from "antd";

import React from "react";

import { UserOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
const { Content, Footer } = Layout;

const Profile = () => {

  return (
    <Layout>
      <Navbar />
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
