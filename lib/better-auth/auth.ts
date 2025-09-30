import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { dbConnect } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (authInstance) return authInstance;

  const mongoose = await dbConnect();
  const db = mongoose.connection.db;
};
