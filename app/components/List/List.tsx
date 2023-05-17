import React, { useEffect, useState } from "react";
import { randomImage } from "@api/randomImage";

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
    <div>
      {image.map((item: ImageItem, idx: number) => {
        return (
          <>
            <img key={item.id} src={item.url} alt={item.title} />
            <span key={idx}>{item.title}</span>
          </>
        );
      })}
    </div>
  );
};

export default List;
