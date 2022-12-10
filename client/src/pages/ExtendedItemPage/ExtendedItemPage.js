import "./ExtendedItemPage.css";
import { allItems } from "../../data/data";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
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
  }

  return (
    <>
      <h1 id="item-name">{product.name}</h1>
      <div className="item-data">{product.shopName}</div>
      <div className="item-data">{product.description}</div>
      <div className="item-data">{product.price}</div>
      <img className="item-img" src={product.firstImg} />
      <img className="item-img" src={product.secondImg} />

      <button className="add-item-btn" onClick={addItem}>add to cart</button>
    </>
  );
};

export default ExtendedItemPage;
