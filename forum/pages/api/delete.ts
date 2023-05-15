// @ts-ignore
import { connectDB } from "@util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  // @ts-ignore
  let db = (await connectDB).db("forum");

  if (req.method == "DELETE") {
    try {
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
    } catch (error) {
      console.error(error);
    }
  }
}
