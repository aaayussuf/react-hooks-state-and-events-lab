import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item"; // Correct path to Item.js

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  // Add your test code here
});

