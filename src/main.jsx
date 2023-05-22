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
          fetch(`http://localhost:3000/allmakeuptoys/${params.id}`),
      },
      {
        path: "details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allmakeuptoys/${params.id}`),
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
