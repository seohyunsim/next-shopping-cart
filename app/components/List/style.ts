import { COLOR } from "@constans/COLOR";
import { css } from "@emotion/react";

export const WrapStyle = css`
  padding: 8em 0em;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const ContentStyle = css`
  width: 282px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
  }

  img,
  span,
  svg {
    cursor: pointer;
  }

  span {
    width: 80%;
  }

  svg {
    color: ${COLOR.black};
    width: 30px;
  }
`;
