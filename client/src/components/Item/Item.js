import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ name, price, firstImg, index }) => {
  return (
    <Link className="card grid-item" to={`/productInfo/${index}`}>
      <img className="item-img" src={firstImg} />
      <div className="container item-basic-data">
        <h4 className="item-name">{name}</h4>
        <p className="item-price">{price}</p>
      </div>
    </Link>
  );
};

export default Item;
