import Items from "../../components/Items/Items";
import "./HomePage.css";
import { allItems } from "../../data/data";

const HomePage = () => {
  return (
    <>
      <div className="page-title">Our Items</div>
      <Items items={allItems} />
    </>
  );
};

export default HomePage;
