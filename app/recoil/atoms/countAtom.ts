import { atom } from "recoil";

export interface CountProps {
  id?: number;
  count?: number;
}

export const countAtom = atom<CountProps[]>({
  key: "countAtom",
  default: [],
});
