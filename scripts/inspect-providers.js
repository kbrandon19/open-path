import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const MONGODB_URI = process.env.DB_STRING;

async function inspectProviders() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('open_path');
    const providers = await db.collection('providers').find({}).limit(3).toArray();

    console.log('\nFirst 3 providers in open_path database:');
    providers.forEach((provider, index) => {
      console.log(`\n--- Provider ${index + 1} ---`);
      console.log('Specialties:', provider.specialties);
      console.log('Insurances:', provider.insurances);
      console.log('Location:', provider.location);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

inspectProviders();