// @ts-ignore
import { connectDB } from "@util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  if (req.method == "GET") {
    res.status(200).json(result);
  }
  if (req.method == "POST") {
    const des = req.body;

    if (des.title === "" || des.content === "") {
      return res.status(500).json("빈칸 작성하도록");
    }

    try {
      await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(des.id) },
          { $set: { title: des.title, content: des.content } }
        );
      res.redirect(302, "/list");
    } catch (error) {
      console.error(error);
    }
  }
}
