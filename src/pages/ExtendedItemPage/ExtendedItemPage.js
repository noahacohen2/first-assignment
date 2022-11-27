import "./ExtendedItemPage.css";
import { allItems } from "../../data/data";
import { useParams } from "react-router-dom";

const ExtendedItemPage = () => {
  const { productIndex } = useParams();
  const product = allItems[productIndex];
  return (
    <>
      <h1 id="item-name">{product.name}</h1>
      <div className="item-data">{product.shopName}</div>
      <div className="item-data">{product.description}</div>
      <div className="item-data">{product.price}</div>
      <img className="item-img" src={product.firstImg} />
      <img className="item-img" src={product.secondImg} />
    </>
  );
};

export default ExtendedItemPage;
