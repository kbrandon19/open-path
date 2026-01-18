// Script to check all databases and find providers
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const MONGODB_URI = process.env.DB_STRING;

async function findProviders() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Get all databases
    const adminDb = client.db().admin();
    const databases = await adminDb.listDatabases();

    console.log('\nChecking all databases for providers collection:');

    for (const dbInfo of databases.databases) {
      const db = client.db(dbInfo.name);
      console.log(`\nDatabase: ${dbInfo.name}`);

      try {
        const collections = await db.listCollections().toArray();

        for (const collection of collections) {
          if (collection.name.toLowerCase().includes('provider')) {
            const count = await db.collection(collection.name).countDocuments();
            console.log(`  Collection: ${collection.name} - ${count} documents`);

            if (count > 0) {
              const sample = await db.collection(collection.name).find({}).limit(3).toArray();
              console.log('  Sample documents:');
              sample.forEach((doc, index) => {
                console.log(`    ${index + 1}. ${JSON.stringify(doc, null, 2).substring(0, 100)}...`);
              });
            }
          }
        }
      } catch (error) {
        console.log(`  Error checking collections: ${error.message}`);
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

findProviders();