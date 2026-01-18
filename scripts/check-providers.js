// Test script to check provider count
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.DB_STRING;

const ProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialties: [{ type: String }],
  imageUrl: { type: String },
  description: { type: String },
  location: { type: String },
  contact: {
    email: String,
    phone: String,
  },
}, { timestamps: true });

const Provider = mongoose.model('Provider', ProviderSchema, process.env.PROVIDER_COLLECTION);

async function checkProviders() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const count = await Provider.countDocuments();
    console.log(`Total providers in collection: ${count}`);

    const providers = await Provider.find({}).limit(5); // Get first 5 for inspection
    console.log('First 5 providers:');
    providers.forEach((provider, index) => {
      console.log(`${index + 1}. ${provider.name} - ${provider._id}`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

checkProviders();