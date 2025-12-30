import Enquiry from "../models/LeadModel.js";

// Get all leads
export const getLeads = async (req, res) => {
  try {
    // const Enquirys = await Enquiry.find().sort({ createdAt:  -1 });
    // const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    const enquiries = await Enquiry.find().sort({ date: -1 });


    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new lead
export const createLead = async (req, res) => {
  try {
    const lead = new Enquiry(req.body);
    const savedLead = await lead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
