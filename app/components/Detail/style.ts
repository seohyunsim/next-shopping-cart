import { COLOR } from "@constans/COLOR";
import { css } from "@emotion/react";

export const WrapStyle = css`
  padding: 8em 0em;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  width: 500px;

  h2 {
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.5px;
    color: #333333;

    margin: 15px 0px 5px 0px;
  }

  button {
    background-color: ${COLOR.woowaBtn};
    height: 68px;
    border: none;

    color: ${COLOR.white};
    font-weight: 700;
    font-size: 23px;
    line-height: 21px;
    cursor: pointer;
  }
`;

export const CostStyle = css`
  margin: 15px 0px 20px 0px;
  padding: 0em 1em;

  display: flex;
  justify-content: space-between;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;

  span:nth-of-type(2) {
    font-size: 24px;
    padding-right: 5px;
  }
`;
