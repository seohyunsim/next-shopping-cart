export type ColorCodeType = keyof typeof COLOR;

export function getColor(colorCode: ColorCodeType) {
  return COLOR[colorCode];
}

export const COLOR = {
  woowa: "#2AC1BC",
  woowaHr: "#AAAAAA",
  woowaBtn: "#73675C",
  black: "#000000",
  white: "#FFFFFF",
  gray01: "#FAFAFC",
  gray02: "#F5F5F7",
  gray03: "#EEEEF0",
  gray04: "#E0E0E2",
  gray05: "#BDBDBF",
  gray06: "#9E9EA0",
  gray07: "#757577",
  gray08: "#616163",
  gray09: "#424244",
  gray10: "#212123",
};
