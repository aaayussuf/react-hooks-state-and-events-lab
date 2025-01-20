import React, { useState } from "react";

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name} - {category}</span>
      <button onClick={handleAddToCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
};

export default Item;
