import Item from "../Item/Item";
import "./Items.css";

const Items = ({ items }) => {
  return (
    <div className="all-items grid-container">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          price={item.price}
          firstImg={item.firstImg}
          index={index}
        />
      ))}
    </div>
  );
};

export default Items;
