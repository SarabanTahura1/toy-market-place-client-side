import React, { useContext } from "react";
import { AuthContextProvider } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Addtoys = () => {
  const { currentUser } = useContext(AuthContextProvider);

  const formOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const sellerName = form.name.value;
    const email = form.email.value;
    const photourl = form.url.value;
    const toyName = form.toyName.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    // console.log(
    //   sellerName,
    //   email,
    //   photourl,
    //   toyName,
    //   subcategory,
    //   price,
    //   quantity,
    //   ratings,
    //   description
    // );
    const newMakeupToy = {
      sellerName,
      email,
      photourl,
      toyName,
      subcategory,
      price,
      quantity,
      ratings,
      description,
    };
    fetch("http://localhost:3000/allmakeuptoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMakeupToy),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            title: "success",
            text: "Toy added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto py-28 px-5 lg:px-0">
      <h2 className=" text-[#FC4BA4] py-4  font-semibold text-2xl md:text-2xl capitalize inline-block  lg:text-4xl">
        Add toys - makeup
      </h2>
      <div className="h-1 w-28 bg-[#FC4BA4] "></div>
      <div>
        <form onSubmit={formOnSubmit} className="space-y-2 mt-5 ">
          {/* name field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Name
            </label>
            <div>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={currentUser?.displayName}
                className="block w-full rounded-md border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-0"
              />
            </div>
          </div>

          {/* email field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={currentUser?.email}
                className="block w-full focus:outline-0 border-2 border-gray-300 rounded-md py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* photoURL field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="photourl"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo URL
              </label>
            </div>
            <div>
              <input
                id="photourl"
                name="url"
                type="url"
                className="block focus:outline-0 w-full rounded-md border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/*toy name field */}
          <div className="space-y-2 ">
            <label
              htmlFor="toyName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Toy Name
            </label>
            <div>
              <input
                id="toyName"
                name="toyName"
                type="text"
                className="block w-full rounded-md border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-0"
              />
            </div>
          </div>

          {/*subcategory field */}
          <div className="space-y-2 ">
            <label
              htmlFor="subcategory"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Subcategory
            </label>
            <select
              name="subcategory"
              id="subcategory"
              className="select select-bordered w-full"
            >
              <option>Rainbow</option>
              <option>Fairy</option>
              <option>Princess</option>
            </select>
          </div>

          {/*price field */}
          <div className="space-y-2 ">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div>
              <input
                id="price"
                name="price"
                type="number"
                placeholder="price in ($)"
                className="block focus:outline-0 w-full rounded-md border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 space-y-2 md:space-y-0  ">
            {/*quantity field */}
            <div className="space-y-2 w-full">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Quantity
              </label>
              <div>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  placeholder="Qty"
                  className="block focus:outline-0 w-full rounded-md border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/*ratings field */}
            <div className="space-y-2 w-full ">
              <label
                htmlFor="ratings"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ratings
              </label>
              <div>
                <input
                  id="ratings"
                  name="ratings"
                  type="number"
                  placeholder="Ratings out of 10"
                  className="block focus:outline-0 w-full rounded-md border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div>
              <textarea
                id="description"
                name="description"
                type="text"
                placeholder="Description"
                className="block focus:outline-0 h-28 w-full rounded-md border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Register button */}
          <div className="py-3 ">
            <button
              type="submit"
              className="flex 
              justify-center rounded-md bg-[#FC4BA4] px-3 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-0 shadow-sm hover:bg-[#F00F80] transition-colors duration-500 ease-in-out"
            >
              Add Toys
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addtoys;
