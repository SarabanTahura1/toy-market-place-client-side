import React from "react";
import Banner from "../../../components/HomeComponents/Banner";

const Alltoys = () => {
  return (
    <div className="max-w-7xl mx-auto my-28 px-5 lg:px-0">
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
                  <tr>
                    <td scope="col" className="px-6 py-4">
                      Seller Name
                    </td>
                    <td scope="col" className="px-6 py-4">
                      <img src="" className="h-16 w-16 rounded-md" alt="" />
                    </td>
                    <td scope="col" className="px-6 py-4">
                      Toy name
                    </td>
                    <td scope="col" className="px-6 py-4">
                      Subcategory
                    </td>
                    <td scope="col" className="px-6 py-4">
                      Price
                    </td>
                    <td scope="col" className="px-6 py-4">
                      Quantity
                    </td>
                    <td scope="col" className="px-6 py-4">
                      Actions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alltoys;
