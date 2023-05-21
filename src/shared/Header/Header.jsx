import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-950 text-white ">
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
              <Link to="/">all toys</Link>
            </li>
            <li>
              <Link to="/">my toys</Link>
            </li>
            <li>
              <Link to="/">add toys</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/login">
                <button className=" mt-2 bg-purple-700 px-3 py-1 text-white border-0">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Link to="/" className="min-w-max normal-case font-bold text-xl">
            BeautyBelle
          </Link>
        </div>
        <div className="flex-none navbar-end ">
          <ul className="menu  capitalize  menu-horizontal px-1 hidden lg:flex font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? " text-indigo-500 " : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? " text-indigo-500 " : ""
                }
              >
                all toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? " text-indigo-500 " : ""
                }
              >
                my toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? " text-indigo-500 " : ""
                }
              >
                add toys{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? " text-indigo-500 " : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <Link to="/login">
                <button className="btn bg-gray-800 text-white border-0">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
