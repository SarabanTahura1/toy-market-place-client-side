import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const makeup = useLoaderData();
  console.log(makeup);
  return <div></div>;
};

export default ViewDetails;
