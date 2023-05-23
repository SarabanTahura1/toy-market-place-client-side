import React from "react";

const GiftSection = () => {
  return (
    <div className="my-28 px-5">
      <h2 className="text-center text-[#FC4BA4] py-4 border-b-4 font-semibold border-[#FC4BA4] text-2xl md:text-2xl mb-1  lg:text-4xl">
        Gift Section
      </h2>
      <section className="bg-gradient-to-r from-pink-500 to-purple-500  py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                className="w-full h-auto mb-8 md:mb-0 rounded-lg shadow-lg"
                src="https://i.postimg.cc/sXd3n0hJ/Princess-Dress-Up-Vanity-Set1.jpg"
                alt="Gift Sets and Bundles"
              />
            </div>
            <div className="md:w-1/2 md:pl-16 text-white">
              <h2 className="text-4xl mb-6 font-bold leading-tight">
                Gift Sets and Bundles
              </h2>
              <p className="text-lg mb-8">
                Make your little one's day with our curated gift sets and
                bundles. These specially crafted sets are perfect for birthdays,
                special occasions, or just to show your love and appreciation.
                Each gift set is thoughtfully put together to provide hours of
                creative play and exploration.
              </p>
              <p className="text-lg mb-8">
                Our gift sets and bundles include a variety of makeup toys, such
                as pretend lipstick, blush, eyeshadow, nail polish, and makeup
                brushes. They come in attractive packaging, making them a
                delightful surprise for your little makeup enthusiast.
              </p>
              <p className="text-lg mb-8">
                Whether you're looking for a complete makeup kit or a themed
                set, we have a range of options to suit different preferences
                and budgets. Discover the perfect gift set today and let your
                child's imagination sparkle and shine!
              </p>
              <a
                href="/shop"
                className="bg-white hover:bg-gray-200 text-pink-500 font-semibold py-3 px-8 rounded-full inline-block transition duration-300 ease-in-out"
              >
                Explore Gift Sets
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftSection;
