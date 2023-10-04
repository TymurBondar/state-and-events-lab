import React, { useState } from "react";

function Item({ name, category }) {
  const [toggle, setToggle] = useState(true);
  const liClass = toggle ? "" : "in-cart";
  const btnText = toggle ? "Add to Cart": "Remove From Cart";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setToggle(!toggle)} className="add">{btnText}</button>
    </li>
  );
}

export default Item;
