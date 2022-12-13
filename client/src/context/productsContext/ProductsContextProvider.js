import productsContext from "./productsContext";
import { useState, useEffect } from "react";
import api from "../../config/api";

const ProductsContextProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    api
      .get("/products", {})
      .then((res) => {
        setAllItems(res.data.sort((a, b) => a.serialNumber - b.serialNumber));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <productsContext.Provider value={{ allItems }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
