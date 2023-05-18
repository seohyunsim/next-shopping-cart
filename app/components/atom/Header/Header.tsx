import React from "react";
import Cart from "@assets/cart_icon.svg";
import { Logostyle, Menustyle, WrapStyle } from "./style";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div css={WrapStyle}>
      <div css={Logostyle}>
        <Cart />
        <h2 onClick={() => router.push("/list")}>GT SHOP</h2>
      </div>
      <div css={Menustyle}>
        <span onClick={() => router.push("/cart")}>장바구니</span>
        <span>주문목록</span>
      </div>
    </div>
  );
};

export default Header;
