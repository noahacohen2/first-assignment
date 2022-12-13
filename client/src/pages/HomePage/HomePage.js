import Items from "../../components/Items/Items";
import { useContext } from "react";
import productsContext from "../../context/productsContext/productsContext";

const HomePage = () => {
  const { allItems } = useContext(productsContext);
  return <Items items={allItems} />;
};

export default HomePage;
