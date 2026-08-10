import "./App.css";
import FoodItemCard from "./components/FoodItemCard";
import foodData from "./data/foodData";

function App() {
  return (
    <div className="app">
      <h1>Food Delivery App</h1>

      <div className="food-container">
        {foodData.map((food) => (
          <FoodItemCard
            key={food.id}
            name={food.name}
            price={food.price}
            category={food.category}
            isAvailable={food.isAvailable}
          />
        ))}
      </div>
    </div>
  );
}

export default App;