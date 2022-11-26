import Item from "../Item/Item";
import "./Items.css";

const Items = ({ items }) => {
  return (
    <div className="all-items">
      {items.map((item) => (
        <Item name={item.name} price={item.price} img={item.img} />
      ))}
    </div>
  );
};

export default Items;
