import { ContentStyle, WrapStyle } from "./style";
import Cart from "@assets/cart_icon.svg";
import { ImageItem, useListItem } from "@hooks/useListItem";
import { useRouter } from "next/router";
import { useSetCart } from "@hooks/useSetCart";

const List = () => {
  const image = useListItem();
  const router = useRouter();
  const setCart = useSetCart();

  return (
    <div css={WrapStyle}>
      {image.map((item: ImageItem, idx: number) => {
        return (
          <div css={ContentStyle} key={item.id}>
            <img
              src={item.url}
              alt={item.title}
              onClick={() => router.push(`detail/${item.id}`)}
            />
            <div>
              <span onClick={() => router.push(`detail/${item.id}`)}>
                {item.title}
              </span>
              <Cart onClick={() => setCart.addItem(item)} />
            </div>
          </div>
        );
      })}
      {setCart.PopupOpen()}
    </div>
  );
};

export default List;
