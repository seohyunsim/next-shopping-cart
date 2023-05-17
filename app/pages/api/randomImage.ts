import axios from "axios";
import React from "react";

export const randomImage = async () => {
  try {
    const instance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });

    const response = await instance.get("photos?_page=1&_limit=30");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
