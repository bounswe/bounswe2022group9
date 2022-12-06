import  User from "../components/User";
import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { id } = useParams();
  return <div><User id={id} /></div>;
}

export default UserPage;
