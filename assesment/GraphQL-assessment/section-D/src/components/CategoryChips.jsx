const CategoryChips = ({ categories, selectedCategory, onSelectCategory }) => {
  const chips = ["All", ...categories];

  return (
    <div className="category-chip-row">
      {chips.map((category) => {
        const isActive = category === selectedCategory;
        return (
          <button
            key={category}
            type="button"
            className={`category-chip ${isActive ? "active" : ""}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryChips;
