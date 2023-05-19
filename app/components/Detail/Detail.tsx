import { CostStyle, WrapStyle } from "./style";
import { useRouter } from "next/router";
import { ImageItem, useListItem } from "@hooks/useListItem";
import Hr from "@components/atom/Hr/Hr";
import { useSetCart } from "@hooks/useSetCart";

const Detail = () => {
  const router = useRouter();
  const item = useListItem();
  const id = Number(router.query.id);
  const detail: ImageItem = item[id - 1];
  const setCart = useSetCart();

  return (
    <div css={WrapStyle} key={detail?.id}>
      <img src={detail?.url} alt={detail?.title} />
      <h2>{detail?.title}</h2>
      <Hr />
      <div css={CostStyle}>
        <span>금액</span>
        <span>{detail?.id}원</span>
      </div>
      <button onClick={() => setCart.addItem(detail)}>장바구니</button>
      {setCart.PopupOpen()}
    </div>
  );
};

export default Detail;
