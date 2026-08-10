import React from "react";
import RestaurantCard from "./component/RestaurantCard";

function App() {
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian",
      rating: 4.6,
      deliveryTime: "30 mins",
    },
    {
      id: 2,
      name: "Spice Hub",
      cuisine: "Indian",
      rating: 4.4,
      deliveryTime: "25 mins",
    },
    {
      id: 3,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.7,
      deliveryTime: "35 mins",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          cuisine={restaurant.cuisine}
          rating={restaurant.rating}
          deliveryTime={restaurant.deliveryTime}
        />
      ))}
    </div>
  );
}

export default App;

// answer of the question

// Props are the correct mechanism for passing restaurant data into each `RestaurantCard` because they allow the same component to display different information without changing its internal code. Instead of hardcoding the restaurant name, cuisine, rating, and delivery time, each card receives these values as props from the parent component, making the component reusable and flexible. When the application receives an array of 50 restaurants from an API, the parent component can simply loop through the array and render 50 `RestaurantCard` components, each with its own unique data. This props-driven design follows the DRY (Don't Repeat Yourself) principle by eliminating duplicate code, improving maintainability, and making updates much easier. If restaurant data changes or new restaurants are added, only the API data needs to be updated, while the `RestaurantCard` component remains unchanged. As a result, props solve the problem of efficiently rendering multiple dynamic UI elements using a single reusable component.
