import { MongoClient } from "mongodb";

const uri = process.env.DB_URI as string;

if (!uri) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;

