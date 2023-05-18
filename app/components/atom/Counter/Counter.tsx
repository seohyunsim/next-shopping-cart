import React, { useEffect, useState } from "react";
import Up from "@assets/count_up_icon.svg";
import Down from "@assets/count_down_icon.svg";
import { SvgStyle, WrapStyle } from "./style";

const Counter = () => {
  const [number, setNumber] = useState(1);

  const onPlus = () => {
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
