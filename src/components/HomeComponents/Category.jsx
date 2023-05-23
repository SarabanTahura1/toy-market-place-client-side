import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContextProvider } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Category = () => {
  const [btnActive, setBtnActive] = useState("Rainbow");
  const [categoryToys, setcategoryToys] = useState([]);
  const { currentUser } = useContext(AuthContextProvider);
  const location = useLocation();

  const HandleView = () => {
    if (!currentUser) {
      Swal.fire({
        icon: "warning",
        title: "User Not Found!",
        text: "You have to log in first to view details",
        showConfirmButton: false,
        timer: 2000,
      });
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  };

  useEffect(() => {
    fetch(`https://beautybelle-server.vercel.app/toyscategory/${btnActive}`)
      .then((res) => res.json())
      .then((result) => setcategoryToys(result));
  }, [btnActive]);

  return (
    <div className="my-28 h-auto max-w-7xl mx-auto px-5">
      <div className=" flex items-center justify-center divide-x-2 divide-[#ca126e] ">
        <button
          onClick={() => setBtnActive("Rainbow")}
          className={`px-4 py-1 focus:outline-0 rounded-l-md text-white hover:bg-[#ca126e] ${
            btnActive === "Rainbow" ? "bg-[#ca126e]" : "bg-[#FC4BA4]"
          }`}
        >
          Rainbow
        </button>
        <button
          onClick={() => setBtnActive("Fairy")}
          className={`px-4 py-1 focus:outline-0  text-white hover:bg-[#ca126e] ${
            btnActive === "Fairy" ? "bg-[#ca126e]" : "bg-[#FC4BA4]"
          }`}
        >
          Fairy
        </button>
        <button
          onClick={() => setBtnActive("Princess")}
          className={`px-4 py-1 focus:outline-0 rounded-e-md text-white hover:bg-[#ca126e] ${
            btnActive === "Princess" ? "bg-[#ca126e]" : "bg-[#FC4BA4]"
          }`}
        >
          Princess
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {categoryToys &&
          categoryToys.map((toy, index) => (
            <div className="w-full shadow-xl p-5">
              <div className="h-96 w-full ">
                <img src={toy.photourl} className="h-full w-full" alt="" />
              </div>
              <div>
                <h2 className="font-medium">Name : {toy.toyName}</h2>
                <h2 className="font-medium">Price : ${toy.price}</h2>
                <h2 className="font-medium">Ratings: {toy.ratings}</h2>
                <div className="mt-2 text-center">
                  <Link
                    onClick={HandleView}
                    to={`/details/${toy._id}`}
                    className="px-3 text-center py-2 w-20 mx-auto inline-block  cursor-pointer text-white rounded-md hover:bg-[#ca126e]   text-sm font-semibold uppercase bg-[#FC4BA4]"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
