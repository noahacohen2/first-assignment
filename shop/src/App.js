import './App.css';
import Items from './components/Items';

function App() {

  const allItems = [
    { name: "hamburger", price: "80", img: "https://www.landwercafe.co.il/wp-content/uploads/2020/01/%D7%94%D7%9E%D7%91%D7%95%D7%A8%D7%92%D7%A8-scaled.jpg" },
    { name: "chips", price: "30", img: "https://www.swan-brand.co.uk/wp-content/uploads/2022/11/c34c7af8698abe2cabd2500f302cbd7c-895x775-c-default.jpg" },
    { name: "salad", price: "65", img: "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg" },
    { name: "zero", price: "10", img: "https://meat-night.co.il/wp-content/uploads/FIL_6234680_636939470088175194.jpg" },
  ];

  return (
    <div>
      <div className="page-title">Our Items</div>
      <Items items={allItems}></Items>
    </div>
  );
}

export default App;
