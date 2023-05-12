// @ts-ignore
import { connectDB } from "@util/database";

export default async function handler(req: any, res: any) {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  if (req.method == "GET") {
    res.status(200).json(result);
  }
  if (req.method == "POST") {
    res.status(200).json(result);
  }
}
