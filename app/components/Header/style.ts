import { css } from "@emotion/react";
import { COLOR } from "@constans/COLOR";

export const WrapStyle = css`
  width: 100%;
  height: 80px;
  background-color: ${COLOR.woowa};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  color: ${COLOR.white};

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  top: 0;
`;

export const Logostyle = css`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    text-decoration-line: none;
  }

  h2 {
    color: ${COLOR.white};

    margin-bottom: 20px;
    font-weight: 900;
    font-size: 30px;
    line-height: 58px;
    cursor: pointer;
  }
`;

export const Menustyle = css`
  display: flex;
  gap: 50px;

  span {
    cursor: pointer;
  }
`;
