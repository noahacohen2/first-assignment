import "./ExtendedItemPage.css";
import { allItems } from "../../data/data";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import AppContext from "../../context";

const ExtendedItemPage = () => {
  const { productIndex } = useParams();
  const product = allItems[productIndex];

  const [cartItems, setCartItems] = useContext(AppContext).cartItems;
  // const setCartItems = useContext("AppDispatchContext");

  const addItem = () => {
    let allItems = cartItems;
    allItems.push(product);
    setCartItems(allItems);
    // todo
  };

  return (
    <>
      <div className="item-data">
        <b>Product Name: </b>
        {product.name}
      </div>
      <div className="item-data">
        <b>Shop Name: </b>
        {product.shopName}
      </div>
      <div className="item-data">
        <b>Product Description: </b>
        {product.description}
      </div>
      <div className="item-data">
        <b>Product Price:</b>
        {product.price}
      </div>
      <img className="extended-img" src={product.firstImg} />
      <img className="extended-img" src={product.secondImg} />

      <button className="add-item-btn item-data" onClick={addItem}>
        add to cart
      </button>
    </>
  );
};

export default ExtendedItemPage;
