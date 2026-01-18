// Script to list all collections and their document counts
require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.DB_STRING;

async function listCollections() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    console.log('Database:', mongoose.connection.db.databaseName);

    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\nCollections:');

    for (const collection of collections) {
      const count = await mongoose.connection.db.collection(collection.name).countDocuments();
      console.log(`${collection.name}: ${count} documents`);
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

listCollections();