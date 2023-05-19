import { ImageItem } from "@hooks/useListItem";
import { atom } from "recoil";

export const cartItemAtom = atom<ImageItem[]>({
  key: "cartItemAtom",
  default: [],
});
