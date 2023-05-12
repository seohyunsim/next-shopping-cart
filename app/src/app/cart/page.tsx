import React from "react";

const cart = () => {
  let carts = ["Tomatoes", "Pasta"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      {carts.map((el) => {
        return <CartItem product={el} />;
      })}
    </div>
  );
};

const CartItem = ({ product }: { product: string }) => {
  return (
    <div className="cart-item">
      <p>{product}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};

export default cart;
