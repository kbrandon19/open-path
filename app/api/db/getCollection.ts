import clientPromise from "./client";
import {Document} from "mongodb";

export async function getCollection<T extends Document = Document>(name: string) {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  return db.collection<T>(name);
}

