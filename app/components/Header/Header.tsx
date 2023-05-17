import React from "react";
import Cart from "@assets/cart_icon.svg";
import { Logostyle, Menustyle, WrapStyle } from "./style";

const Header = () => {
  return (
    <div css={WrapStyle}>
      <div css={Logostyle}>
        <Cart />
        <h2>SHOP</h2>
      </div>
      <div css={Menustyle}>
        <span>장바구니</span>
        <span>주문목록</span>
      </div>
    </div>
  );
};

export default Header;
