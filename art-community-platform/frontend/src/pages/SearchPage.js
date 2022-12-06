import Search from "../components/Search";
import React from "react";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { text } = useParams();
  return <div><Search text={text}/></div>;
}

export default SearchPage;
