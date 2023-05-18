import Popup from "@components/atom/Popup/Popup";
import React, { useState } from "react";

export const usePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const onPopupOpen = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  const PopupOpen = () => {
    if (showPopup) {
      return <Popup />;
    }
  };

  return { PopupOpen, onPopupOpen };
};
