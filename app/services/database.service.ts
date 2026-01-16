// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables

export const collections: { faq?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase() {
    dotenv.config();
        const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_STRING as string);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    collections.faq = db.collection(process.env.FAQ_COLLECTION as string);

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${process.env.FAQ_COLLECTION}`);

    
}   