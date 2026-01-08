import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", InquirySchema);
