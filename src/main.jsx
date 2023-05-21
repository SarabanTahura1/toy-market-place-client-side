import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./outlets/Page/Home/Home";
import AuthProvider from "./Provider/AuthProvider";
import Signup from "./outlets/Page/Signup/Signup";
import Login from "./outlets/Page/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
