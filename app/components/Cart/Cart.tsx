import React from "react";
import {
  CheckboxStyle,
  LayoutStyle,
  PaymentWrapStyle,
  WrapStyle,
} from "./style";
import Hr from "@components/atom/Hr/Hr";
import { COLOR } from "@constans/COLOR";
import CartItem from "./CartItem";
import Payment from "@components/atom/Payment/Payment";

const Cart = () => {
  return (
    <div css={WrapStyle}>
      <h2>장바구니</h2>
      <Hr color={COLOR.black} />
      <div css={LayoutStyle}>
        <div>
          <div css={CheckboxStyle}>
            <label>
              <input type="checkbox" />
              선택해제
            </label>
            <button>상품삭제</button>
          </div>
          <CartItem />
        </div>
        <div css={PaymentWrapStyle}>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Cart;
