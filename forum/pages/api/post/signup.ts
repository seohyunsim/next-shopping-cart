// @ts-ignore
import { connectDB } from "@util/database";

export default async function handler(req: any, res: any) {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  let result = await db.collection("user").find().toArray();

  if (req.method == "GET") {
    res.status(200).json(result);
  }
  if (req.method == "POST") {
    const des = req.body;

    if (des.id === "" || des.password === "") {
      return res.status(500).json("빈칸 작성하도록");
    } else if (des.id === result.id) {
      return res.status(500).json("아이디가 존재함");
    }

    try {
      await db.collection("user").insertOne(req.body);
      res.redirect(302, "/list");
    } catch (error) {
      console.error(error);
    }
  }
}
