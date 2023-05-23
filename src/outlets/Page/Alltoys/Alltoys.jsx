import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Alltoys = () => {
  const [makeupToys, setMakeupToys] = useState([]);
  // fetcch  all makeup data by useEffect
  useEffect(() => {
    fetch("http://localhost:3000/allmakeuptoys")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setMakeupToys(result);
      });
  }, []);

  return (
    <div className=" py-28 px-5 lg:px-0">
      <Helmet>
        <title>BeautyBelle | All Toys</title>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-[#FC4BA4] py-4  font-semibold text-2xl md:text-2xl capitalize inline-block  lg:text-4xl">
          All toys - makeup
        </h2>
        <div className="h-1 w-28 bg-[#FC4BA4] "></div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Seller Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Thumbnail
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Toy name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Subcategory
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {makeupToys.map((makeupToy) => (
                      <tr>
                        <td className="px-6 py-4">{makeupToy.sellerName}</td>
                        <td className="px-6 py-4">
                          <img
                            src={makeupToy.photourl}
                            className="h-12 w-12 rounded-full"
                            alt=""
                          />
                        </td>
                        <td className="px-6 py-4">{makeupToy.toyName}</td>
                        <td className="px-6 py-4">{makeupToy.subcategory}</td>
                        <td className="px-6 py-4">{makeupToy.price}$</td>
                        <td className="px-6 py-4 text-center">
                          {makeupToy.quantity}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            to={`/details/${makeupToy._id}`}
                            className="px-3 py-2 cursor-pointer text-white rounded-md hover:bg-amber-600  text-sm font-semibold uppercase bg-warning"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alltoys;
