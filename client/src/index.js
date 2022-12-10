import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExtendedItemPage from "./pages/ExtendedItemPage/ExtendedItemPage";
import ShppingCartPage from "./pages/shoppingCartPage/ShoppingCartPage";
import ConetxtProvider from "./contextProvider";

const router = createBrowserRouter([
  {
    path: "/homePage",
    element: <HomePage />,
  },
  {
    path: "/productInfo/:productIndex",
    element: <ExtendedItemPage />,
  },
  {
    path: "/shoppingCart",
    element: <ShppingCartPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConetxtProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </ConetxtProvider>
);

reportWebVitals();
