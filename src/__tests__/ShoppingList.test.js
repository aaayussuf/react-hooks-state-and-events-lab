import { render, screen } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList"; // Correct path to ShoppingList.js

const testData = [
  { name: "Milk", category: "Dairy" },
  { name: "Apple", category: "Fruits" },
  // Add more test data here
];

test("renders the shopping list", () => {
  render(<ShoppingList items={testData} />);
  // Add your test code here
});
