import  Exhibition from "../components/Exhibition";
import React from "react";
import { useParams } from "react-router-dom";

function ExhibitionPage() {
  const { id } = useParams();
  return <div><Exhibition id={id} /></div>;
}

export default ExhibitionPage;
