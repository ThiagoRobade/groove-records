import { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="product-card">
            <div className="image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <button
                    className={`favorite-btn ${isFavorite ? "active" : ""}`}
                    onClick={toggleFavorite}
                    aria-label="Favoritar"
                >
                    {isFavorite ? "★ Favorito" : "☆ Favoritar"}
                </button>
            </div>

            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-artist">{product.artist}</p>
                <p className="product-price">R$ {product.price.toFixed(2).replace(".", ",")}</p>

                <button className="add-cart-btn" onClick={() => onAddToCart(product)}>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}