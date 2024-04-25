import mongoose from "mongoose";

// Define the schema for the file
const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user who uploaded the file
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model from the schema
export const File = mongoose.model("File", fileSchema);
