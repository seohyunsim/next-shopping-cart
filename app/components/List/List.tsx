import { ContentStyle, WrapStyle } from "./style";
import Cart from "@assets/cart_icon.svg";
import { ImageItem, useListItem } from "@hooks/useListItem";
import { usePopup } from "@hooks/usePopup";
import { useRouter } from "next/router";

const List = () => {
  const { PopupOpen, onPopupOpen } = usePopup();
  const image = useListItem();
  const router = useRouter();

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
              <Cart onClick={onPopupOpen} />
            </div>
          </div>
        );
      })}
      {PopupOpen()}
    </div>
  );
};

export default List;
