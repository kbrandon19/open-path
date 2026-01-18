import mongoose from 'mongoose';

const ProviderSchema = new mongoose.Schema({
  provider_id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  credentials: {
    type: String,
  },
  specialties: [{
    type: String,
  }],
  modalities: [{
    type: String,
  }],
  insurances: [{
    type: String,
  }],
  languages: [{
    type: String,
  }],
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  is_accepting_clients: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Provider || mongoose.model('Provider', ProviderSchema, process.env.PROVIDER_COLLECTION);