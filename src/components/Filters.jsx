import "./Filters.css";

export default function Filters({
                                    searchTerm,
                                    onSearchChange,
                                    selectedCategory,
                                    onCategoryChange,
                                    categories
                                }) {
    return (
        <div className="filters-container">
            <input
                type="text"
                placeholder="Buscar por disco ou artista..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />

            <div className="category-chips">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`chip-btn ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => onCategoryChange(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}