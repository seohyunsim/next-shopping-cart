"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DetailLink = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };
  return <button onClick={onClick}>detail</button>;
};

export default DetailLink;
