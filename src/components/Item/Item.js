import "./Item.css";
import Card from "./Card/Card";

const Item = ({ name, price, img }) => {
  return (
    <Card className="item-card">
      <div className="item-basic-data">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
      </div>
      <img className="item-img" src={img} />
    </Card>
  );
};

export default Item;
