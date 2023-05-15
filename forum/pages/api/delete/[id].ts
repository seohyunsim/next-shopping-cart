// @ts-ignore
import { connectDB } from "@util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: any, res: any) {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(req.query) });

  const session = await getServerSession(req, res, authOptions);
  const dbAuthor = result?.author;
  const userEmail = session?.user?.email;

  if (req.method == "DELETE") {
    if (session) {
      if (userEmail === dbAuthor) {
        await db.collection("post").deleteOne({ _id: new ObjectId(req.query) });
        return res.status(200).json("complete");
      } else {
        console.log("다름");
        // return res.status(500).json("다름");
      }
    } else return res.status(500).json("로그인 필요");
  }
}
