import React from "react";
import { ItemOptionStyle, ItemStyle, ItemWrapStyle } from "./style";
import Hr from "@components/atom/Hr/Hr";
import { ImageItem } from "@hooks/useListItem";
import Trash from "@assets/trash_icon.svg";
import Counter from "@components/atom/Counter/Counter";
import { useRecoilValue } from "recoil";
import { cartItemAtom } from "../../recoil/atoms/cartItemAtom";
import { useSetCart } from "@hooks/useSetCart";

const CartItem = () => {
  const cartItem = useRecoilValue(cartItemAtom);
  const setCart = useSetCart();

  return (
    <div css={ItemWrapStyle}>
      <p>든든배송 상품 &#40;{cartItem.length}개&#41;</p>
      <Hr />
      {cartItem.map((item: ImageItem) => {
        return (
          <>
            <div css={ItemStyle} key={item.id}>
              <label>
                <input type="checkbox" />
              </label>
              <img src={item.url} alt={item.title} />
              <span>{item.title}</span>
              <div css={ItemOptionStyle}>
                <Trash onClick={() => setCart.removeItem(item)} />
                <Counter items={cartItem} />
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
