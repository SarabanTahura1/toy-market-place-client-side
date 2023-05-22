import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/favicon.png";
import { AuthContextProvider } from "../../Provider/AuthProvider";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContextProvider);

  return (
    <div className=" z-50   fixed top-0 left-0 right-0 ">
      <div className="bg-gray-50 text-black ">
        {/* navbar start */}
        <div className="navbar  container mx-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" rounded-md  dropdown-content w-96 mt-3 p-2 shadow bg-gray-950   capitalize"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/alltoys">all toys</Link>
              </li>
              {currentUser && (
                <>
                  <li>
                    <Link to="/mytoys">my toys</Link>
                  </li>
                  <li>
                    <Link to="/addtoys">add toys</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <Link
              to="/"
              className="min-w-max normal-case font-bold text-xl flex items-center gap-2"
            >
              <img src={logo} className="h-12" alt="" />
              <span>BeautyBelle</span>
            </Link>
          </div>
          <div className="flex-none navbar-end ">
            <ul className="menu  capitalize  menu-horizontal px-1 hidden lg:flex font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? " text-[#FC4BA4] " : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/alltoys"
                  className={({ isActive }) =>
                    isActive ? " text-[#FC4BA4] " : ""
                  }
                >
                  all toys
                </NavLink>
              </li>
              {currentUser && (
                <>
                  <li>
                    <NavLink
                      to="/mytoys"
                      className={({ isActive }) =>
                        isActive ? " text-[#FC4BA4] " : ""
                      }
                    >
                      my toys
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/addtoys"
                      className={({ isActive }) =>
                        isActive ? " text-[#FC4BA4] " : ""
                      }
                    >
                      add toys{" "}
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? " text-[#FC4BA4] " : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            {currentUser ? (
              <div>
                <label
                  className="btn btn-ghost btn-circle relative
   "
                >
                  <div
                    tabIndex={0}
                    className="relative inline-block group  btn-circle avatar"
                  >
                    <img className="w-8 rounded-full" />
                    <ul
                      className="absolute right-0 px-4  z-10 w-48 py-4 text-start bg-gray-950 text-white
       rounded-lg shadow-lg hidden group-hover:block"
                    >
                      <a className="py-2 text-xs">{currentUser?.displayName}</a>
                      <br />
                      <a onClick={logout} className="py-2 text-xs">
                        logout
                      </a>
                    </ul>
                  </div>
                </label>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn bg-white transition-colors duration-500 ease-in-out hover:bg-[#F93899] hover:text-white text-[#FC4BA4] border-2   ">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
