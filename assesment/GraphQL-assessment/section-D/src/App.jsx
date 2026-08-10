import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "./graphql/queries";
import foodItems from "./data/foodItems";
import CategoryChips from "./components/CategoryChips";
import FoodItemList from "./components/FoodItemList";
import LoadingSpinner from "./components/LoadingSpinner";

const fallbackCategories = ["Pizza", "Burger", "Pasta", "Biryani", "Dessert"];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    errorPolicy: "all",
  });

  if (loading) {
    return (
      <main className="app-shell">
        <header className="page-header">
          <h1>Food Category Browser</h1>
          <p>Choose a category to filter tasty food items.</p>
        </header>
        <LoadingSpinner />
      </main>
    );
  }

  const categoriesFromApi =
    data?.categories?.edges?.map((edge) => edge.node.name) || [];
  const categories =
    categoriesFromApi.length > 0 ? categoriesFromApi : fallbackCategories;

  if (error) {
    console.error(error);
  }

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
          <span className="eyebrow">Fresh choices, fast delivery</span>
          <h1>Food Category Browser</h1>
          <p>
            Browse menu items and filter by category without leaving the page.
          </p>
        </div>
      </header>

      <section className="filter-section">
        <CategoryChips
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </section>

      <section className="content-section">
        <FoodItemList items={filteredItems} />
      </section>
    </main>
  );
};

export default App;
