const FoodItemCard = ({ item }) => {
  return (
    <article className="food-card">
      <div className="food-image-wrapper">
        <img src={item.image} alt={item.name} className="food-image" />
      </div>
      <div className="food-card-body">
        <div className="food-card-header">
          <h3>{item.name}</h3>
          <span className="food-category">{item.category}</span>
        </div>
        <p className="food-description">{item.description}</p>
        <p className="food-price">₹{item.price}</p>
      </div>
    </article>
  );
};

export default FoodItemCard;
