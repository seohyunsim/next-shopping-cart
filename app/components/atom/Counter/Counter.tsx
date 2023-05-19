import React, { useEffect, useState } from "react";
import Up from "@assets/count_up_icon.svg";
import Down from "@assets/count_down_icon.svg";
import { SvgStyle, WrapStyle } from "./style";
import { useRecoilState } from "recoil";
import { countAtom } from "../../../recoil/atoms/countAtom";
import { ImageItem } from "@hooks/useListItem";

const Counter = ({ items }: { items: ImageItem[] }) => {
  const [count, setCount] = useRecoilState(countAtom);
  const [number, setNumber] = useState(1);

  const onPlus = () => {
    setCount((prev) => [...prev, { count: number + 1 }]);
    setNumber((number) => number + 1);
  };

  const onMinus = () => {
    setNumber((number) => number - 1);
  };

  useEffect(() => {
    if (number < 1) {
      setNumber(1);
    }
  }, [number]);

  return (
    <div css={WrapStyle}>
      <span>{number}</span>
      <div css={SvgStyle}>
        <Up onClick={onPlus} />
        <Down onClick={onMinus} />
      </div>
    </div>
  );
};

export default Counter;
