import React from "react";
import Banner from "../../../components/HomeComponents/Banner";
import Gallery from "../../../components/HomeComponents/Gallery";
import { Helmet } from "react-helmet";
import Category from "../../../components/HomeComponents/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BeautyBelle | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Gallery />
        <Category />
      </div>
    </div>
  );
};

export default Home;
