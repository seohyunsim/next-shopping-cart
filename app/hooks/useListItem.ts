import { randomImage } from "@api/randomImage";
import React, { useEffect, useState } from "react";

export interface ImageItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  count?: number;
}

export const useListItem = () => {
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

  return image;
};
