import FoodItemCard from "./FoodItemCard";

const FoodItemList = ({ items }) => {
  if (items.length === 0) {
    return <p className="empty-state">No food items found in this category.</p>;
  }

  return (
    <div className="food-grid">
      {items.map((item) => (
        <FoodItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FoodItemList;
