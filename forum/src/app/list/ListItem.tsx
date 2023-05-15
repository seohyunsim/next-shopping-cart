"use client";

import Link from "next/link";
import React from "react";

const ListItem = ({ result }: { result: string[] }) => {
  const onDelete = (id: string, e: any) => {
    fetch(`api/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        e.target.parentElement.style.opacity = 0;
        setTimeout(() => {
          e.target.parentElement.style.display = "none";
        }, 1000);
      });
  };

  return (
    <>
      {result.map((el: any, idx: number) => {
        return (
          <div className="list-item" key={idx}>
            <Link href={`detail/${el._id}`}>
              <h4>{el.title}</h4>
            </Link>
            <Link href={`/edit/${el._id}`}>✏️</Link>
            <span className="list-btn" onClick={(e) => onDelete(el._id, e)}>
              {" "}
              🗑️{" "}
            </span>
            <p>{el.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default ListItem;
