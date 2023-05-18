import { COLOR } from "@constans/COLOR";
import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.9;
    }
`;

export const WrapStyle = css`
  border: 1px solid ${COLOR.gray04};
  padding: 2em;
  background-color: ${COLOR.gray01};
  opacity: 0.9;
  width: fit-content;

  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;

  animation: ${fadeIn} 1s;
`;
