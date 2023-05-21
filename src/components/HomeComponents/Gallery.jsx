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
    <div className="container mx-auto my-16 px-5">
      <h2 className="text-center py-4 border-b-2 font-semibold border-gray-950 text-xl md:text-2xl  lg:text-4x">
        Gallery
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {imageGallery?.map((img) => (
          <img className="p-5 shadow-lg h-96" src={img} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
