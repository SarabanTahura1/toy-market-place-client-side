import React, { useContext, useState } from "react";
import { AuthContextProvider } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Signup = () => {
  const { profileUpdate, newAccountCreate, googleLogin, githubLogin, logout } =
    useContext(AuthContextProvider);
  const [errortext, setErrortext] = useState("");

  const handleCreateUSer = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const url = form.url.value;
    console.log(email, password, name, url);
    setErrortext(" ");

    // if field Empty

    if (
      name.length === 0 ||
      email.length === 0 ||
      url.length === 0 ||
      password.length === 0
    ) {
      return setErrortext(
        "You can not Submit ! Please Fill the blanks input field"
      );
    }
    // password length checker
    if (password.length < 6) {
      return Swal.fire({
        title: "Error!",
        text: "Password must be 6 character long",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    newAccountCreate(email, password)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        profileUpdate(user, name, url)
          .then((result) => {
            logout();
          })
          .catch((error) => {
            setErrortext(error.message);
          });

        Swal.fire({
          title: "success",
          text: "Account Create Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        setErrortext(error.code);
        setErrortext(error.message);
      });
    form.reset();
  };

  return (
    <div className="py-28 px-5 max-w-7xl mx-auto">
      <div className="w-full flex">
        <div className="lg:w-6/12 lg:bg-[#FC4BA4] "></div>
        <div className="w-full lg:w-6/12 px-5 my-10 lg:px-10 bg-[#eb7cb3] py-10 rounded-md lg:bg-transparent">
          <div>
            <h2 className="text-2xl font-bold pb-1">Signup </h2>
            <div className="h-1 w-12 bg-white lg:bg-[#FC4BA4]"></div>
          </div>
          <form onSubmit={handleCreateUSer} className="space-y-2  ">
            {/* name field */}
            <div className="space-y-1 py-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-0"
                />
              </div>
            </div>
            {/* photoURL field */}
            <div className="space-y-1">
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
            {/* email field */}
            <div className="space-y-1">
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
                  autoComplete="email"
                  className="block w-full focus:outline-0 border-2 border-gray-300 rounded-md py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* password field */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full border-2 border-gray-300 rounded-md  py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-0"
                />
              </div>
            </div>
            <span className="text-error">{errortext}</span>
            {/* Register button */}
            <div className="py-3">
              <button
                type="submit"
                className="flex w-full  justify-center rounded-md bg-[#FC4BA4] px-3 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-0 shadow-sm hover:bg-[#F00F80] transition-colors duration-500 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
          <Link
            to="/login"
            className=" text-gray-700 hover:underline cursor-pointer"
          >
            Already have an account ? Click Here
          </Link>
          <div className="flex items-center justify-evenly mt-6">
            <FaGoogle
              onClick={googleLogin}
              className="text-4xl cursor-pointer"
            ></FaGoogle>
            <FaGithub
              onClick={githubLogin}
              className="text-4xl cursor-pointer"
            ></FaGithub>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
