import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
    return (
        <main className="product-grid">
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    product={item}
                    onAddToCart={onAddToCart}
                />
            ))}
        </main>
    );
}