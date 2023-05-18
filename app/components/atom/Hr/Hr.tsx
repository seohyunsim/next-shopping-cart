import { COLOR } from "@constans/COLOR";
import { css } from "@emotion/react";
import React from "react";

const Hrstyle = (props?: string) => css`
  width: 100%;
  border: 1px solid;
  border-color: ${props ? props : COLOR.woowaHr};
`;

const Hr = ({ color }: { color?: string }) => {
  return <hr css={Hrstyle(color)} />;
};

export default Hr;
