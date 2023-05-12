import React from "react";
// @ts-ignore
import { connectDB } from "@util/database";
import { ObjectId } from "mongodb";

const Detail = async (props: any) => {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
};

export default Detail;
