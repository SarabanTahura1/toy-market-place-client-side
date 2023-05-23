import React, { useEffect, useState } from "react";

const Category = () => {
  const [btnActive, setBtnActive] = useState("Rainbow");
  const [categoryToys, setcategoryToys] = useState([]);
  console.log(btnActive);

  useEffect(() => {
    fetch(`http://localhost:3000/allmakeuptoys/${btnActive}`)
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);

  //   const ActiveCategoryData = async (subcategory) => {
  //     setBtnActive(subcategory);
  //     const res = await fetch(`http://localhost:3000/alltoys/${category}`);
  //     const data = await res.json();
  //     setAllToys(data);
  //   };

  return (
    <div className="my-28 max-w-7xl mx-auto">
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
      <div></div>
    </div>
  );
};

export default Category;
