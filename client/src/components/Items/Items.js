import Item from "../Item/Item";
import "./Items.css";

const Items = ({ items }) => {
  return (
    <div className="all-items grid-container">
      {items.map((item) => (
        <Item
          key={item.serialNumber}
          name={item.name}
          price={item.price}
          firstImg={item.firstImg}
          index={item.serialNumber}
        />
      ))}
    </div>
  );
};

export default Items;
