import Items from "../../components/Items/Items";
import "./HomePage.css";
import { allItems } from "../../data/data";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <Link to={`/shoppingCart`}>
          <FaShoppingCart className="shopping-cart-icon"></FaShoppingCart>
        </Link>
        <div className="page-title">Our Items</div>
      </div>
      <Items items={allItems} />
    </>
  );
};

export default HomePage;
