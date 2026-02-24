import mongoose from "mongoose";

/** * Global variable use karte hain taake connection cache ho sake.
 * Serverless environments mein ye connections re-use karne mein madad karta hai.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing in environment variables");
  }

  // Agar pehle se connection maujood hai to wahi return karo
  if (cached.conn) {
    return cached.conn;
  }

  // Agar pehle se connection ki koshish chal rahi hai to uska intezar karo
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Foran error de agar connection na ho
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ New MongoDB connection established");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Error:", e.message);
    throw e;
  }

  return cached.conn;
}
