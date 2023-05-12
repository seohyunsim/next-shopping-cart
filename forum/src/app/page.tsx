import Image from "next/image";
import styles from "./page.module.css";
// @ts-ignore
import { connectDB } from "@util/database";

export default async function Home() {
  // @ts-ignore
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return <div>{result[0].title}</div>;
}
