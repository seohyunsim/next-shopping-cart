import { ObjectId } from "mongodb";
import React from "react";
// @ts-ignore
import { connectDB } from "@util/database";

const Edit = async (props: any) => {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>수정</h4>
      <form action="/api/post/modify" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          name="id"
          defaultValue={result._id.toString()}
          style={{ display: "none" }}
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default Edit;
