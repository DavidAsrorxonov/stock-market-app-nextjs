import mongoose from "mongoose";

const MONGO_DB_URI = process.env.MONGO_DB_URI;

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongooseCache;

if (!cached) {
  // Changed from if (cached) to if (!cached)
  cached = global.mongooseCache = { conn: null, promise: null };
}

export const dbConnect = async () => {
  if (!MONGO_DB_URI)
    throw new Error("Missing MONGO_DB_URI or MONGODB_URI is not defined");

  if (cached.conn) return cached.conn; // Also fixed this line

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_DB_URI, { bufferCommands: false });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  console.log(
    `Connected to MongoDB ${MONGO_DB_URI} in ${process.env.NODE_ENV} mode`
  );
};
