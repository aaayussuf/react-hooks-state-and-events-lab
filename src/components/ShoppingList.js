import React from "react";
import Item from "./Item";

const ShoppingList = ({ items, categoryFilter }) => {
  const filteredItems = categoryFilter
    ? items.filter(item => item.category === categoryFilter)
    : items;

  return (
    <ul className="Items">
      {filteredItems.map((item) => (
        <Item key={item.name} name={item.name} category={item.category} />
      ))}
    </ul>
  );
};

export default ShoppingList;