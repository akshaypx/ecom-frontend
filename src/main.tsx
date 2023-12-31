import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Layout from "./components/layout/Layout";
import Categories from "./pages/categories/Categories";
import AllProducts from "./pages/allProducts/AllProducts";
import Details from "./pages/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/categories",
    element: (
      <Layout>
        <Categories />
      </Layout>
    ),
  },
  {
    path: "/allproducts",
    element: (
      <Layout>
        <AllProducts />
      </Layout>
    ),
  },
  {
    path: "/allproducts/:id",
    element: (
      <Layout>
        <Details />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
