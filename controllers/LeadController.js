import Enquiry from "../models/LeadModel.js";

// Get all leads
export const getLeads = async (req, res) => {
  try {
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

// Update lead status (Admin)
export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedLead = await Enquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedLead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.json(updatedLead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete enquiry (Admin)
export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Enquiry.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.json({ message: "Enquiry deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
