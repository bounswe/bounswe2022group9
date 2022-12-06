import React from "react";
import { useParams } from "react-router-dom";
import ArtItem from "../components/Detailed-Art-Item";

function DummyPage() {
  const { id } = useParams();
  return <div><ArtItem id={id}/>  </div>;
}

export default DummyPage;
