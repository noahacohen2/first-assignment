import Items from "../../components/Items/Items";
import { allItems } from "../../data/data";
import Navbar from "./../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Items items={allItems} />
    </>
  );
};

export default HomePage;
