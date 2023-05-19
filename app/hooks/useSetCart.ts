import React, { useEffect } from "react";
import { usePopup } from "./usePopup";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartItemAtom } from "../recoil/atoms/cartItemAtom";
import { ImageItem, useListItem } from "./useListItem";
import { CountProps, countAtom } from "../recoil/atoms/countAtom";

export const useSetCart = () => {
  const { onPopupOpen, PopupOpen } = usePopup();
  const items = useListItem();
  const [cart, setCart] = useRecoilState(cartItemAtom);
  const [count, setCount] = useRecoilState(countAtom);

  const addItem = (item: ImageItem) => {
    const id = item.id;
    const cartItem = items[id - 1] as any;

    setCart((prev) => [...prev, { ...cartItem, count: 1 }]);
    setCount((prev) => [...prev, { id: id, count: 1 }]);

    console.log(cart);

    onPopupOpen();
  };

  const removeItem = (item: ImageItem) => {
    const id = item.id;

    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 중복 아이템 카운트
  // useEffect(() => {
  //   const duplicates = countDuplicates(count);
  //   const keys = Object.keys(duplicates);
  //   const values = Object.values(duplicates);

  //   const updatedCount = keys.map((el, idx) => ({
  //     id: Number(keys[idx]),
  //     count: values[idx],
  //   }));

  //   console.log(updatedCount);
  // }, [cart]);

  return { addItem, removeItem, onPopupOpen, PopupOpen };
};

// 중복 아이템 계산
const countDuplicates = (array: CountProps[]) => {
  const counts: any = {};

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    const id = obj.id as number;

    counts[id] = counts[id] ? counts[id] + 1 : 1;
  }

  return counts;
};
