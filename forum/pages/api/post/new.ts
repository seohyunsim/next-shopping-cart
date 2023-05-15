// @ts-ignore
import { connectDB } from "@util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: any, res: any) {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    req.body.author = session?.user?.email;
  }

  if (req.method == "POST") {
    const des = req.body;

    if (des.title === "" || des.content === "") {
      return res.status(500).json("빈칸 작성하도록");
    }

    try {
      console.log(req.body);

      await db.collection("post").insertOne(req.body);
      res.redirect(302, "/list");
    } catch (error) {
      console.error(error);
    }
  }
}
