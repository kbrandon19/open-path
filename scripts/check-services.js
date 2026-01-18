// Check services data
import mongoose from 'mongoose';

async function checkServices() {
  try {
    await mongoose.connect(process.env.DB_STRING);
    console.log('Connected to MongoDB');

    const Service = mongoose.model('Service', new mongoose.Schema({}), process.env.SERVICES_COLLECTION);
    const services = await Service.find({}).limit(5);

    console.log('Services in database:');
    services.forEach((service, index) => {
      console.log(`${index + 1}. ${JSON.stringify(service, null, 2)}`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

checkServices();