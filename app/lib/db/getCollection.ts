// lib/db/getCollection.ts
import clientPromise from "./mongo";

export async function getCollection<T extends Document = any>(collectionName: string) {
  const client = await clientPromise;
  const db = client.db("open_path");
  return db.collection<T>(collectionName);
}
