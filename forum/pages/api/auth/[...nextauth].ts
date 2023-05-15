import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// @ts-ignore
import { connectDB } from "@util/database";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "8d3f101616825c8dfb02",
      clientSecret: "5e51d600155c702466d0bff8563f74b29422847e",
    }),
  ],
  secret: "1120",
  // @ts-ignore
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
