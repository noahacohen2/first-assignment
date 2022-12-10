import "./shoppingCartPage.css";
import Items from "../../components/Items/Items";
import { addCart } from "../../data/dl"
import { useContext, useState } from 'react';
import AppContext from "../../context";
import UserForm from "../../components/UserForm/UserForm";

const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = useContext(AppContext).cartItems;
    const [userData, setUserData] = useContext(AppContext).userData;

    // const chnageUserNameHandler = (userName) => {
    //     let currUserData = userData;
    //     currUserData.UserName = userName;
    //     setUserData(currUserData);
    // }

    // const chnageUserIdHandler = (userId) => {
    //     let currUserData = userData;
    //     currUserData.UserId = userId;
    //     setUserData(currUserData);
    // }

    const saveCart = () => {
        let cart = {
            "UserName": userData.UserName,
            "userId": userData.UserId,
            "CartItems": cartItems
        }
        addCart(cart).then(() => {
            setCartItems([]);
            setUserData({ UserName: "", UserId: 0 });
        });
    }

    return (
        <>
            <div className="page-title">Your shopping cart</div>
            <UserForm></UserForm>
            <Items items={cartItems} />
            <button className="save-cart-btn" onClick={saveCart}>Save your cart</button>
        </>
    );
};

export default ShoppingCartPage;
