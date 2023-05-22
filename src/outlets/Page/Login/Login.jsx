import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContextProvider } from "../../../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { userLogin, googleLogin, githubLogin } =
    useContext(AuthContextProvider);
  const [errortext, setErrortext] = useState("");
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  // handle login user
  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrortext("");

    userLogin(email, password)
      .then((result) => {
        // sweat alert
        Swal.fire({
          title: "success",
          text: "Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(from);
      })
      .catch((error) => {
        setErrortext(error.message);
      });
    form.reset();
  };

  return (
    <div className="my-28 px-5 max-w-7xl mx-auto">
      <div className="w-full flex">
        <div className="lg:w-6/12 lg:bg-[#FC4BA4] min-h-full"></div>
        <div className="w-full lg:w-6/12 px-5 my-10 lg:px-10 bg-[#eb7cb3] py-10 rounded-md lg:bg-transparent">
          <div>
            <h2 className="text-2xl font-bold pb-1">Sign-in </h2>
            <div className="h-1 w-12 bg-white lg:bg-[#FC4BA4]"></div>
          </div>
          <form onSubmit={handleUserLogin} className="space-y-2  py-4">
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
                Sign in
              </button>
            </div>
          </form>
          <Link
            to="/signup"
            className=" text-gray-700 hover:underline cursor-pointer"
          >
            Not a member? Click Here
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

export default Login;
