import "./shoppingCartPage.css";
import Items from "../../components/Items/Items";
// import { addCart } from "../../data/dl";
import { useContext, useEffect, useState } from "react";
import cartContext from "../../context/cartContext/cartContext";
import UserForm from "../../components/UserForm/UserForm";
import api from "../../config/api";

const ShoppingCartPage = () => {
  const { cartItems, cleanCart } = useContext(cartContext);
  const [userName, setUserName] = useState("");
  const [userTz, setUserTz] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [totalCartPrice, setTotalCartPrice] = useState("");

  const cleanUserData = () => {
    setUserName("");
    setUserTz("");
    setUserEmail("");
  };

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price;
    });
    setTotalCartPrice(sum);
  }, [cartItems]);

  const saveCart = () => {
    api
      .post("userCart", {
        userName,
        tz: userTz,
        cartItems,
      })
      .then(() => {
        cleanCart();
        cleanUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="page-title">Your shopping cart</div>
      <UserForm
        userName={userName}
        setUserName={setUserName}
        userTz={userTz}
        setUserTz={setUserTz}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
      />
      <div className="user-form">
        the total price is {totalCartPrice} dollars
      </div>
      <button className="save-cart-btn" onClick={saveCart}>
        Save your cart
      </button>
      <Items items={cartItems} />
    </>
  );
};

export default ShoppingCartPage;
