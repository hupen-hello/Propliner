import mongoose, { Schema, Document } from 'mongoose';

// TypeScript ke liye Interface
export interface IInquiry extends Document {
  name: string;
  email: string;
  phone: string;
  message?: string;
  createdAt: Date;
}

// Database ka asil Schema (Table ka structure)
const InquirySchema: Schema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'] 
  },
  phone: { 
    type: String, 
    required: [true, 'Phone number is required'] 
  },
  message: { 
    type: String,
    default: '' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

const Inquiry = mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);

export default Inquiry;