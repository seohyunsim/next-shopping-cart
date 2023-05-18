import React, { useEffect, useState } from "react";
import { randomImage } from "@api/randomImage";
import { ContentStyle, WrapStyle } from "./style";
import Cart from "@assets/cart_icon.svg";

interface ImageItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const List = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await randomImage();
        setImage(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div css={WrapStyle}>
      {image.map((item: ImageItem, idx: number) => {
        return (
          <div css={ContentStyle} key={item.id}>
            <img src={item.url} alt={item.title} />
            <div>
              <span>{item.title}</span>
              <Cart />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
