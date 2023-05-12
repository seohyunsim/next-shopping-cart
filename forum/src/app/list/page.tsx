import React from "react";
// @ts-ignore
import { connectDB } from "@util/database";
import Link from "next/link";

const list = async () => {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((el: any, idx: number) => {
        return (
          <div className="list-item" key={idx}>
            <Link href={`detail/${el._id}`}>
              <h4>{el.title}</h4>
            </Link>
            <Link href={`/edit/${el._id}`}>✏️</Link>
            <p>{el.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default list;
