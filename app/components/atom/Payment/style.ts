import { COLOR } from "@constans/COLOR";
import { css } from "@emotion/react";

export const WrapStyle = css`
  width: 448px;
  height: 318px;
  border: 1px solid #dddddd;
  text-align: center;

  h2 {
    border-bottom: 1px solid #dddddd;
    margin: 0;
    padding: 20px 0px 20px 30px;
    text-align: left;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.5px;

    color: #333333;
  }

  button {
    width: 388px;
    height: 73px;
    margin-top: 50px;

    background: #2ac1bc;
    border: none;
    border-radius: 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const AmountStyle = css`
  padding: 30px 34px;

  display: flex;
  justify-content: space-between;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.5px;

    color: #333333;
    border-bottom: 4px solid rgba(42, 193, 188, 0.5);
  }
`;
