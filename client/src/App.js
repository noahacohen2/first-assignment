import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ExtendedItemPage from "./pages/ExtendedItemPage/ExtendedItemPage";
import ShppingCartPage from "./pages/shoppingCartPage/ShoppingCartPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="homePage" element={<HomePage />} />
        <Route path="productInfo">
          <Route path=":productIndex" element={<ExtendedItemPage />} />
        </Route>
        <Route path="shoppingCart" element={<ShppingCartPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
