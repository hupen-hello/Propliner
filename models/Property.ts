import mongoose, { Schema, Document } from 'mongoose';

export interface IProperty extends Document {
  title: string;
  location: string;
  tenants: string[]; // Array of strings kyunki ek se zyada tenant ho sakte hain
  description: string;
  imageUrl: string; // Database mein hum photo ka link save karenge
  createdAt: Date;
}

const PropertySchema: Schema = new Schema({
  title: { 
    type: String, 
    required: [true, 'Property title is required'] 
  },
  location: { 
    type: String, 
    required: [true, 'Location/Address is required'] 
  },
  tenants: { 
    type: [String], 
    default: [] 
  },
  description: { 
    type: String,
    required: [true, 'Description is required']
  },
  imageUrl: { 
    type: String,
    required: [true, 'Image URL is required'] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

const Property = mongoose.models.Property || mongoose.model<IProperty>('Property', PropertySchema);

export default Property;