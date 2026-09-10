import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { products } from "./data/products";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
      <div className="app-container">
        <Header cartCount={cartCount} />
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>
  );
}