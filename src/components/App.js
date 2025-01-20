import React, { useState } from "react";
import ShoppingList from "./ShoppingList"; // Correct the import path

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  
  const items = [
    { name: "Milk", category: "Dairy" },
    { name: "Bread", category: "Bakery" },
    { name: "Cake", category: "Dessert" },
    { name: "Cheese", category: "Dairy" },
    { name: "Cookies", category: "Dessert" }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
        <option value="">All Categories</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        <option value="Bakery">Bakery</option>
      </select>
      <ShoppingList items={items} categoryFilter={categoryFilter} />
    </div>
  );
};

export default App;
