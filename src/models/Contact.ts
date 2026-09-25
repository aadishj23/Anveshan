import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent model overwrite in development hot reloading
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
