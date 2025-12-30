// models/Enquiry.model.js
import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  name: String,
  email: String,
 pax: String,
  days: String,
  message: String,
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
   budget: {
    type: Number,
    trim: true,
  },
  status: { type: String, default: "New" },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Enquiry", EnquirySchema);
