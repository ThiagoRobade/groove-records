import { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import { products } from "./data/products";
import "./App.css";

export default function App() {
    const [cartCount, setCartCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    // Extrai as categorias dinamicamente sem repetições
    const categories = ["Todas", ...new Set(products.map((p) => p.category))];

    const handleAddToCart = () => {
        setCartCount((prev) => prev + 1);
    };

    const handleRemoveFromCart = () => {
        setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    // Filtra por nome/artista e por categoria
    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.artist.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "Todas" || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="app-container">
            <Header cartCount={cartCount} />
            <Filters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                categories={categories}
            />
            <ProductList
                products={filteredProducts}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
            />
        </div>
    );
}