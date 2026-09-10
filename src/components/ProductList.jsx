import ProductCard from "./ProductCard";
import "./ProductList.css";

export default function ProductList({ products, onAddToCart, onRemoveFromCart }) {
    if (products.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
                Nenhum disco encontrado com os filtros selecionados.
            </div>
        );
    }

    return (
        <main className="product-grid">
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    product={item}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                />
            ))}
        </main>
    );
}