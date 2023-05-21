import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({ age: 24, displayName: "bristi" });

  
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
            {user && (
              <>
                <li>
                  <Link to="/">my toys</Link>
                </li>
                <li>
                  <Link to="/">add toys</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/blog">Blog</Link>
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
                  isActive ? " text-[#FC4BA4] " : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? " text-[#FC4BA4] " : ""
                }
              >
                all toys
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? " text-[#FC4BA4] " : ""
                    }
                  >
                    my toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
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
          {user ? (
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
                    <a className="py-2 text-xs">{user?.displayName}</a>
                    <br />
                    <a  className="py-2 text-xs">
                      Sign Out
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
  );
};

export default Header;
