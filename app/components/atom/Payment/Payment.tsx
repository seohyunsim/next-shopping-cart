import React from "react";
import { AmountStyle, WrapStyle } from "./style";

const Payment = () => {
  return (
    <div css={WrapStyle}>
      <h2>결제예상금액</h2>
      <div css={AmountStyle}>
        <span>결제예상금액</span>
        <span>123원</span>
      </div>
      <button>주문하기</button>
    </div>
  );
};

export default Payment;
