import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  service: {
    type: String,
    required: true,
  },
  service_desciption: {
    type: String,
  },
  // Add other fields as needed
}, {
  timestamps: true,
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema, process.env.SERVICES_COLLECTION);