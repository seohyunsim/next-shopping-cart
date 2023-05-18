import { COLOR } from "@constans/COLOR";
import { css } from "@emotion/react";

const LableStyle = css`
  label {
    user-select: none;
    cursor: pointer;

    input {
      appearance: none;
      width: 28px;
      height: 28px;
      margin-right: 12px;
      cursor: pointer;

      background-color: ${COLOR.white};
      border: 1px solid ${COLOR.woowa};
      border-radius: 2px;

      &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: ${COLOR.woowa};
      }
    }
  }
`;

export const LayoutStyle = css`
  display: flex;
`;

export const WrapStyle = css`
  width: 1320px;
  padding: 7em 0em;
  margin: 0 auto;

  h2 {
    text-align: center;

    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
  }
`;

export const CheckboxStyle = css`
  width: 735px;
  margin: 50px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    display: flex;
    align-items: center;
  }
  ${LableStyle}

  button {
    box-sizing: border-box;
    color: #333333;
    border: 1px solid #bbbbbb;
    background-color: ${COLOR.white};

    width: 117px;
    height: 50px;
    cursor: pointer;
  }
`;

export const ItemWrapStyle = css`
  width: 735px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 33px;
    letter-spacing: 0.5px;
  }
`;

export const ItemStyle = css`
  display: flex;
  padding-top: 20px;
  padding-bottom: 30px;

  label {
    width: 28px;
    height: 28px;
  }
  ${LableStyle}

  img {
    width: 144px;
    height: 144px;

    margin-left: 15px;
    margin-right: 20px;
  }

  span {
    width: 50%;
    height: 100%;
  }
`;

export const ItemOptionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;

  svg {
    cursor: pointer;
  }

  span {
    height: 30px;

    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    letter-spacing: 0.5px;
  }
`;

export const PaymentWrapStyle = css`
  width: 100%;
  height: 100%;

  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
