import Home from "../components/Home";
import React from "react";
import {
  Layout,
} from "antd";
import Navbar from "../components/Navbar";

function HomePage() {

  return (
    <Layout>
      <Navbar />
      <Home />
    </Layout>
  );
}

export default HomePage;
