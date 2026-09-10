export default function Header({ cartCount }) {
    return (
        <header className="header">
            <div>
                <h1 className="header-title">Groove Records</h1>
                <p className="header-subtitle">Vinis raros e clássicos direto para sua coleção</p>
            </div>
            <div className="cart-indicator">
                Carrinho: <span className="cart-badge">{cartCount}</span>
            </div>
        </header>
    );
}