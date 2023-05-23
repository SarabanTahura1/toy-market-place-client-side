import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Mytoys = () => {
  const { currentUser } = useContext(AuthContextProvider);
  const [makeupToys, setMakeupToys] = useState([]);

  // fetcch  all makeup data by useEffect
  useEffect(() => {
    fetch(
      `https://beautybelle-server.vercel.app/allmakeuptoysbyemail?email=${currentUser.email}`
    )
      .then((response) => response.json())
      .then((result) => {
        setMakeupToys(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://beautybelle-server.vercel.app/allmakeuptoys/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((result) => {
            const remaining = makeupToys?.filter((t) => t._id !== id);
            setMakeupToys(remaining);
            Swal.fire("success!", "Toys Deleted", "success");
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const sortOnChange = (e) => {
    
    let changedValue = e.target.value;
    fetch(
      `https://beautybelle-server.vercel.app/allmakeuptoysbyemailsort/${changedValue}?email=${currentUser.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setMakeupToys(result);
      });
  };

  return (
    <div className=" my-28 px-5 lg:px-0">
      <Helmet>
        <title>BeautyBelle | My Toys</title>
      </Helmet>
      <div className="max-w-7xl mx-auto mt-20">
        <div className="flex justify-between items-center gap-6">
          <h2 className=" text-[#FC4BA4] py-4  font-semibold text-2xl md:text-2xl capitalize inline-block  lg:text-4xl">
            My toys - makeup
          </h2>
          <select
            onChange={sortOnChange}
            className="select select-bordered select-sm  max-w-xs"
          >
            <option>none</option>
            <option>ascending</option>
            <option>descending</option>
          </select>
        </div>
        <div className="h-1 w-28 bg-[#FC4BA4] "></div>
        <div className="flex flex-col ">
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
                      <tr key={makeupToy._id} className="font-medium">
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
                            className="px-3 py-2 cursor-pointer bg-[#FC4BA4] text-white rounded-md hover:bg-[#ca126e]  text-sm font-semibold uppercase "
                          >
                            view
                          </Link>

                          <Link
                            to={`/updatetoys/${makeupToy._id}`}
                            className="px-3 py-2 cursor-pointer text-white rounded-md hover:bg-amber-800  text-sm font-semibold uppercase bg-amber-600 "
                          >
                            update
                          </Link>
                          <Link
                            onClick={() => deleteHandler(makeupToy._id)}
                            className="px-3 py-2 cursor-pointer text-white rounded-md hover:bg-[#c70707] text-sm font-semibold uppercase bg-[#f32a2a]"
                          >
                            delete
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
