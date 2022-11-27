import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExtendedItemPage from "./pages/ExtendedItemPage/ExtendedItemPage";

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
    path: "/",
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
