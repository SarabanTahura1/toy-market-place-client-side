import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const makeup = useLoaderData();
  const {
    sellerName,
    email,
    photourl,
    toyName,
    subcategory,
    price,
    quantity,
    ratings,
    description,
  } = makeup;
  return (
    <>
      <Helmet>
        <title>BeautyBelle | View Details</title>
      </Helmet>
      <div className="max-w-7xl mx-auto my-28 lg:flex items-center justify-center px-5 lg:px-0">
        <div className="  w-full lg:w-5/12 flex justify-center ">
          <img src={photourl} className="object-cover w-fit" alt="" />
        </div>
        <div className="w-full lg:w-7/12 px-5 space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Name : {sellerName}
          </h1>
          <h1 className="text-3xl font-bold text-gray-900">Email : {email}</h1>
          <h2 className="text-xl font-bold text-gray-900">
            Toy Name : {toyName}
          </h2>
          <h2 className="text-xl font-bold text-gray-900">
            Subcategory : {subcategory}
          </h2>
          <h2 className="text-xl font-bold text-gray-900 ">Price : {price}</h2>
          <h2 className="text-xl font-bold text-gray-900">Qty : {quantity}</h2>
          <h2 className="text-xl font-bold text-gray-900 ">
            Ratings: {ratings}
          </h2>
          <h2 className="text-xl font-bold text-gray-900">
            Information : {description}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
