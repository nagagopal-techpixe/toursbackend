import mongoose from "mongoose";

// Inquiry Schema
const InquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String },
    status: {
      type: String,
      enum: ["New", "Contacted", "Pending", "Closed"],
      default: "New",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", InquirySchema);