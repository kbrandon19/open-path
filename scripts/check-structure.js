// Script to check the structure of provider documents
import mongoose from 'mongoose';

const MONGODB_URI = process.env.DB_STRING;

async function checkProviderStructure() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const Provider = mongoose.model('Provider', new mongoose.Schema({}), process.env.PROVIDER_COLLECTION);

    const provider = await Provider.findOne({});
    if (provider) {
      console.log('Provider document structure:');
      console.log(JSON.stringify(provider, null, 2));
    } else {
      console.log('No providers found');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

checkProviderStructure();