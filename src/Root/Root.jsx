import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import Banner from "../components/HomeComponents/Banner";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="min-h-[calc(100vh-80px)] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
