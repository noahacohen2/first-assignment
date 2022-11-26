import "./Item.css";

const Item = ({ name, price, img }) => {
  const openExtendedInformation = () => {};

  return (
    <div className="card item-card" onClick={openExtendedInformation}>
      <div className="item-basic-data">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
      </div>
      <img className="item-img" src={img} />
    </div>
  );
};

export default Item;
