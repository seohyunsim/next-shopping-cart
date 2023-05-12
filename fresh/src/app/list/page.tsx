"use client";

import React, { useState } from "react";

const List = () => {
  const [addItem, setAddItem] = useState([0, 0, 0]);
  const product = ["Tomatoes", "Pasta", "Coconut"];
  const image = ["tomato", "pasta", "coconut"];

  const onPlus = (idx: number) => {
    const copy = [...addItem];
    copy[idx] = copy[idx] + 1;
    setAddItem(copy);
  };
  return (
    <div>
      <h2>Products</h2>
      {product.map((name, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food/${image[idx]}.png`} className="food-img" />
            <h4>{name} $40</h4>
            <span> {addItem[idx]} </span>
            <button onClick={() => onPlus(idx)}>+</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
