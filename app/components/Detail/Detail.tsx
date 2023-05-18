import { CostStyle, WrapStyle } from "./style";
import { useRouter } from "next/router";
import { ImageItem, useListItem } from "@hooks/useListItem";
import { usePopup } from "@hooks/usePopup";
import Hr from "@components/atom/Hr/Hr";

const Detail = () => {
  const { PopupOpen, onPopupOpen } = usePopup();
  const router = useRouter();
  const item = useListItem();
  const id = Number(router.query.id);
  const detail: ImageItem = item[id - 1];

  return (
    <div css={WrapStyle} key={detail?.id}>
      <img src={detail?.url} alt={detail?.title} />
      <h2>{detail?.title}</h2>
      <Hr />
      <div css={CostStyle}>
        <span>금액</span>
        <span>{detail?.id}원</span>
      </div>
      <button onClick={onPopupOpen}>장바구니</button>
      {PopupOpen()}
    </div>
  );
};

export default Detail;
