import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./outlets/Page/Home/Home";
import AuthProvider from "./Provider/AuthProvider";
import Signup from "./outlets/Page/Signup/Signup";
import Login from "./outlets/Page/Login/Login";
import Alltoys from "./outlets/Page/Alltoys/Alltoys";
import Mytoys from "./outlets/Page/Mytoys/Mytoys";
import Addtoys from "./outlets/Page/Addtoys/Addtoys";
import Updatetoys from "./outlets/Page/Updatetoys/Updatetoys";
import ViewDetails from "./outlets/Page/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Errorpage from "./outlets/Page/Errorpage/Errorpage";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Blogs from "./outlets/Page/Blog/Blogs";
// ..
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "alltoys",
        element: <Alltoys></Alltoys>,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <Mytoys></Mytoys>
          </PrivateRoute>
        ),
      },
      {
        path: "addtoys",
        element: <Addtoys></Addtoys>,
      },
      {
        path: "updatetoys/:id",
        element: <Updatetoys></Updatetoys>,
        loader: ({ params }) =>
          fetch(
            `https://beautybelle-server.vercel.app/allmakeuptoys/${params.id}`
          ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://beautybelle-server.vercel.app/allmakeuptoys/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
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
