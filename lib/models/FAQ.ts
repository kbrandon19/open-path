import mongoose from 'mongoose';

const FAQSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  // Add other fields as needed
}, {
  timestamps: true,
});

export default mongoose.models.FAQ || mongoose.model('FAQ', FAQSchema, process.env.FAQ_COLLECTION);