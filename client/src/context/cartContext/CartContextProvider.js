import cartContext from "./cartContext";
import { useState } from "react";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };

  const cleanCart = () => {
    setCartItems([]);
  };

  return (
    <cartContext.Provider value={{ cartItems, addCartItem, cleanCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
