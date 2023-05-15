import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://ssh4563:1234@forum-next-study.ldswqmt.mongodb.net/forum?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  if (!global._mongo) {
    // @ts-ignore
    global._mongo = new MongoClient(url, options).connect();
  }
  // @ts-ignore
  connectDB = global._mongo;
} else {
  // @ts-ignore
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
