import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import ExtendedItemPage from "./pages/ExtendedItemPage/ExtendedItemPage";
// import ShppingCartPage from "./pages/shoppingCartPage/ShoppingCartPage";
import ConetxtProvider from "./contextProvider";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/homePage",
//     element: <HomePage />,
//   },
//   {
//     path: "/productInfo/:productIndex",
//     element: <ExtendedItemPage />,
//   },
//   {
//     path: "/shoppingCart",
//     element: <ShppingCartPage />,
//   },
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConetxtProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ConetxtProvider>
);

reportWebVitals();
