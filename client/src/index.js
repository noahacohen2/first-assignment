import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from "./context/cartContext/CartContextProvider";
import ProductsContextProvider from "./context/productsContext/ProductsContextProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <ProductsContextProvider>
        <Router>
          <App />
        </Router>
      </ProductsContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
