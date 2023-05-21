import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Banner = () => {
  return (
    <div className="h-screen w-full">
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative flex justify-center items-center">
            <img
              src="https://i.postimg.cc/FH6Vmkrp/j5yfzr8qk5mqkugyuregc4ly2sawjl5dun3fyg0pyui51ox3xiavujamoy6rcirm.jpg"
              className="w-full h-screen "
            />
            <div className="absolute space-y-4  z-10 max-w-5xl mx-auto text-center">
              <h1 className=" text-3xl md:text-4xl  lg:text-6xl bg-clip-text text-transparent font-bold    bg-gradient-to-r from-gray-900 to-rose-900">
                Enhance Beauty - Unveiling Your Inner Goddess
              </h1>
              <p className="text-lg font-medium">
                Welcome to Enchanté Beauty, where magic meets makeup. Discover
                an exquisite array of cosmetics that will transform you into a
                radiant goddess. From captivating eyeshadows to luxurious
                lipsticks, our curated collection will empower you to express
                your individuality and embrace the art of self-enhancement.
                Embrace your inner beauty with Enchanté Beauty.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center">
            <img
              src="https://i.postimg.cc/mDxMghXG/banner-makeup-beauty-products-like-rouge-brush-eyeshadow-lipstick-pink-background-empty-copy-space-d.jpg"
              className="w-full h-screen "
            />
            <div className="absolute space-y-4  z-10 max-w-5xl mx-auto text-center">
              <h1 className=" text-3xl md:text-4xl  lg:text-6xl bg-clip-text text-transparent font-bold    bg-gradient-to-r from-gray-900 to-rose-900">
                Radiant Beauty - Unveil Your Glamour
              </h1>
              <p className="text-lg font-medium">
                Step into a world of enchantment at Radiant Beauty. Discover an
                exquisite array of makeup essentials, from vibrant lipsticks to
                mesmerizing eyeshadows, designed to accentuate your natural
                allure. Our expert beauty tips and tutorials will empower you to
                create stunning looks that radiate confidence and timeless
                elegance. Indulge in the transformative power of makeup with
                Radiant Beauty.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center">
            <img
              src="https://i.postimg.cc/0yD9qQwS/frame-top-border-makeup-products-cosmetics-pastel-pink-background-flat-lay-view-beauty-blog-banner-t.jpg"
              className="w-full h-screen "
            />
            <div className="absolute space-y-4  z-10 max-w-5xl mx-auto text-center">
              <h1 className=" text-3xl md:text-4xl  lg:text-6xl   bg-clip-text text-transparent font-bold    bg-gradient-to-r from-gray-900 to-rose-900">
                BeautyBloom - Blossom into Your Perfect Look
              </h1>
              <p className="text-lg font-medium">
                Welcome to BeautyBloom, your one-stop destination for all things
                makeup and beauty. Discover an exquisite selection of cosmetics
                and expertly curated tips, empowering you to embrace your
                individuality and enhance your natural radiance. Let your inner
                beauty flourish with BeautyBloom's transformative products and
                empowering community.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    // <div>
    //   <div className="carousel w-full">
    //     <div id="item1" className="carousel-item w-full">
    //       <img
    //         src="https://i.postimg.cc/FH6Vmkrp/j5yfzr8qk5mqkugyuregc4ly2sawjl5dun3fyg0pyui51ox3xiavujamoy6rcirm.jpg"
    //         className="w-full"
    //       />
    //     </div>
    //     <div id="item2" className="carousel-item w-full">
    //       <img
    //         src="https://i.postimg.cc/FH6Vmkrp/j5yfzr8qk5mqkugyuregc4ly2sawjl5dun3fyg0pyui51ox3xiavujamoy6rcirm.jpg"
    //         className="w-full"
    //       />
    //     </div>
    //     <div id="item3" className="carousel-item w-full">
    //       <img
    //         src="https://i.postimg.cc/FH6Vmkrp/j5yfzr8qk5mqkugyuregc4ly2sawjl5dun3fyg0pyui51ox3xiavujamoy6rcirm.jpg"
    //         className="w-full"
    //       />
    //     </div>
    //   </div>
    //   <div className="flex justify-center w-full py-2 gap-2">
    //     <a href="#item1" className="btn btn-xs">
    //       1
    //     </a>
    //     <a href="#item2" className="btn btn-xs">
    //       2
    //     </a>
    //     <a href="#item3" className="btn btn-xs">
    //       3
    //     </a>
    //   </div>
    // </div>
  );
};

export default Banner;
