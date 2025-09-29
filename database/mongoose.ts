import mongoose from "mongoose";

const MONGO_DB_URI = process.env.MONGO_DB_URI;

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongooseCache;

if (cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}
