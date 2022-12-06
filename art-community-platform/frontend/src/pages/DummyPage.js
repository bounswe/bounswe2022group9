import React from "react";
import { useParams } from "react-router-dom";

function DummyPage() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default DummyPage;
