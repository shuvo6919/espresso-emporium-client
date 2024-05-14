import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductUpdate from "./Components/ProductUpdate/ProductUpdate";
import MainProvider from "./Providers/MainProvider/MainProvider";
import ScrollToTop from "./Routes/ScrollToTop";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/add_product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/coffee/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/update_coffee/:id",
        element: <ProductUpdate></ProductUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </React.StrictMode>
);
