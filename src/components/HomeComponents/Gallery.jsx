import React from "react";

const Gallery = () => {
  const imageGallery = [
    " https://i.postimg.cc/sXd3n0hJ/Princess-Dress-Up-Vanity-Set1.jpg",
    "https://i.postimg.cc/mZHJTN50/Princess-Lip-Gloss-Tower.jpg",
    "https://i.postimg.cc/Gpj74XCp/Fairy-Princess-Makeup-Set1.jpg",
    "https://i.postimg.cc/Ls69Y01C/Shimmering-Fairy-Dust-Eyeshadow-Palette.jpg",
    "https://i.postimg.cc/Qd6tb3hG/Rainbow-Glitter-Lip-Gloss-Set.jpg",
    "https://i.postimg.cc/JnT0TCbB/Rainbow-Nail-Art-Kit2.jpg",
  ];
  return (
    <div className="my-28 px-5">
      <h2 className="text-center text-[#FC4BA4] py-4 border-b-4 font-semibold border-[#FC4BA4] text-2xl md:text-2xl  lg:text-4xl">
        Makeup Gallery
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {imageGallery?.map((img, index) => (
          <img
            key={index}
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="50"
            className="p-5  shadow-lg h-96 object-cover w-full"
            src={img}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
