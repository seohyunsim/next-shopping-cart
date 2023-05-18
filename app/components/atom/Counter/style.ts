import { css } from "@emotion/react";

export const WrapStyle = css`
  display: flex;

  span {
    border: 1px solid #dddddd;

    padding: 17px 34px;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 19px;
    letter-spacing: 0.5px;
  }
`;

export const SvgStyle = css`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  svg {
    border: 1px solid #dddddd;
    padding: 12px 16px;
    /* width: 42px;
    height: 30px; */
  }
`;
