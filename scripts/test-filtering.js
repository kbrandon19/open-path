import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const MONGODB_URI = process.env.DB_STRING;

async function testFiltering() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('open_path');

    // Test filtering by specialty
    console.log('\n--- Testing specialty filter: Anxiety ---');
    const anxietyProviders = await db.collection('providers').find({
      specialties: { $in: ['Anxiety'] }
    }).toArray();
    console.log(`Found ${anxietyProviders.length} providers with Anxiety specialty`);

    // Test filtering by insurance
    console.log('\n--- Testing insurance filter: Blue Cross ---');
    const blueCrossProviders = await db.collection('providers').find({
      insurances: { $in: ['Blue Cross'] }
    }).toArray();
    console.log(`Found ${blueCrossProviders.length} providers accepting Blue Cross`);

    // Test filtering by location
    console.log('\n--- Testing location filter: Atlanta ---');
    const atlantaProviders = await db.collection('providers').find({
      location: { $regex: 'Atlanta', $options: 'i' }
    }).toArray();
    console.log(`Found ${atlantaProviders.length} providers in Atlanta`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

testFiltering();