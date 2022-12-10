import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ name, price, firstImg, index }) => {
  return (
    <Link className="card item-card" to={`/productInfo/${index}`}>
      <div className="item-basic-data">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
      </div>
      <img className="item-img" src={firstImg} />
    </Link>
  );
};

export default Item;
