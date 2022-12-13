import "./ExtendedItemPage.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../context/cartContext/cartContext";
import productsContext from "../../context/productsContext/productsContext";

const ExtendedItemPage = () => {
  const { addCartItem } = useContext(cartContext);
  const { allItems } = useContext(productsContext);
  const { productIndex } = useParams();

  const product = allItems[productIndex];

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
      <button
        className="add-item-btn item-data"
        onClick={() => {
          addCartItem(product);
        }}
      >
        add to cart
      </button>
      <img className="extended-img" src={product.firstImg} />
      <img className="extended-img" src={product.secondImg} />
    </>
  );
};

export default ExtendedItemPage;
