import { SerializedStyles, css } from "@emotion/react";
import { COLOR } from "./COLOR";

export type ButtonColorType = "brown" | "mint" | "white";

export interface ButtonColorProps {
  textColor: string;
  backgroundColor?: string;
  borderColor?: string;
}

type ButtonColorTypeDef = {
  [key in ButtonColorType]: ButtonColorProps;
};

export const BUTTON_COLOR_TYPE_DEF: ButtonColorTypeDef = {
  brown: {
    textColor: COLOR.white,
    backgroundColor: COLOR.woowaBtn,
  },
  mint: {
    textColor: COLOR.white,
    backgroundColor: COLOR.woowa,
  },
  white: {
    textColor: COLOR.gray10,
    backgroundColor: COLOR.white,
    borderColor: COLOR.gray09,
  },
};
