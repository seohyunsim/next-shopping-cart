import React from "react";
import { ItemOptionStyle, ItemStyle, ItemWrapStyle } from "./style";
import Hr from "@components/atom/Hr/Hr";
import { ImageItem, useListItem } from "@hooks/useListItem";
import Trash from "@assets/trash_icon.svg";
import Counter from "@components/atom/Counter/Counter";

const CartItem = () => {
  const image = useListItem();

  return (
    <div css={ItemWrapStyle}>
      <p>든든배송 상품 &#40;{image.length}개&#41;</p>
      <Hr />
      {image.map((item: ImageItem, idx: number) => {
        return (
          <>
            <div css={ItemStyle} key={item.id}>
              <label>
                <input type="checkbox" />
              </label>
              <img src={item.url} alt={item.title} />
              <span>{item.title}</span>
              <div css={ItemOptionStyle}>
                <Trash />
                <Counter />
                <span>{item.id}원</span>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default CartItem;
