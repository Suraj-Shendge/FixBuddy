import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fixbuddy";

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI");
}

type Cache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
const globalAny = global as typeof globalThis & { mongooseCache?: Cache };

const cached: Cache = globalAny.mongooseCache || { conn: null, promise: null };
globalAny.mongooseCache = cached;

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: "fixbuddy" });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
