import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#FC4BA4] pt-8 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <Link
              to="/"
              className=" normal-case inline-block font-bold text-xl "
            >
              <img src={logo} className="h-28" alt="" />
            </Link>

            <h5 className="text-lg mt-0 mb-2 ">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="grid grid-cols-1 gap-1">
              <span>Call : 465-4596-565</span>
              <span>Address : 2540 W El Camino Real</span>
            </div>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className=" shadow-2xl font-normal transition-all duration-200 border-2 hover:bg-[#c20965] h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab  text-white fa-dribbble" />
              </button>
              <button
                className=" shadow-2xl font-normal transition-all duration-200 border-2 hover:bg-[#c20965] h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab  text-white fa-github" />
              </button>
              <button
                className=" shadow-2xl font-normal transition-all duration-200 border-2 hover:bg-[#c20965] h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab  text-white fa-facebook-square" />
              </button>
              <button
                className=" shadow-2xl font-normal transition-all duration-200 border-2 hover:bg-[#c20965] h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab  text-white fa-twitter" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 ">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover: font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover: font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover: font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover: font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover: font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover: font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover: font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover: font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-white hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Notus JS by
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-white hover:"
              >
                BeautyBelle
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
