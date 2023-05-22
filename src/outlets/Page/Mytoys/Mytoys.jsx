import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../../../Provider/AuthProvider";
import Banner from "../../../components/HomeComponents/Banner";

const Mytoys = () => {
  const { currentUser } = useContext(AuthContextProvider);
  const [makeupToys, setMakeupToys] = useState([]);
  console.log(currentUser.email);

  // fetcch  all makeup data by useEffect
  useEffect(() => {
    fetch(
      `http://localhost:3000/allmakeuptoysbyemail?email=${currentUser.email}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setMakeupToys(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" py-28 px-5 lg:px-0">
   
        <Banner></Banner>
   
      <div className="max-w-7xl mx-auto mt-20">
        <h2 className=" text-[#FC4BA4] py-4  font-semibold text-2xl md:text-2xl capitalize inline-block  lg:text-4xl">
          My toys - makeup
        </h2>
        <div className="h-1 w-28 bg-[#FC4BA4] "></div>
        <div className="flex flex-col mt-20">
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
                      <th scope="col" className="px-6 py-4 text-center">
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
                        <td className="px-6 py-4 text-center space-x-2">
                          <Link
                            to={`/details/${makeupToy._id}`}
                            className="px-3 py-2 cursor-pointer text-white rounded-md hover:bg-amber-600  text-sm font-semibold uppercase bg-warning"
                          >
                            view
                          </Link>

                          <Link
                            to={`/updatetoys/${makeupToy._id}`}
                            className="px-3 py-2 cursor-pointer text-white rounded-md hover:bg-amber-600  text-sm font-semibold uppercase bg-warning"
                          >
                            update
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

export default Mytoys;
