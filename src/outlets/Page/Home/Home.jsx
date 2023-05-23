import React from "react";
import Banner from "../../../components/HomeComponents/Banner";
import Gallery from "../../../components/HomeComponents/Gallery";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BeautyBelle | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
