import Inquiry from "../models/content.js";

// ---------------- CREATE ----------------
export const submitInquiry = async (req, res) => {
  try {
    const { fullName, company, email, phone, message } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Full Name & Email are required",
      });
    }

    const inquiry = await Inquiry.create({
      fullName,
      company,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: inquiry,
    });
  } catch (err) {
    console.error("Inquiry Error:", err);
    res.status(500).json({
      success: false,
      message: "Server error while submitting inquiry",
    });
  }
};

// ---------------- GET ALL ----------------
export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: inquiries });
  } catch (err) {
    console.error("Get Inquiries Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ---------------- GET BY ID ----------------
export const getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ success: false, message: "Inquiry not found" });
    }
    res.status(200).json({ success: true, data: inquiry });
  } catch (err) {
    console.error("Get Inquiry Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ---------------- UPDATE STATUS ----------------
export const updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ success: false, message: "Inquiry not found" });
    }

    if (status && ["New", "Contacted", "Pending", "Closed"].includes(status)) {
      inquiry.status = status;
    } else {
      return res.status(400).json({ success: false, message: "Invalid status value" });
    }

    await inquiry.save();

    res.status(200).json({ success: true, message: "Status updated", data: inquiry });
  } catch (err) {
    console.error("Update Status Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ---------------- DELETE ----------------
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ success: false, message: "Inquiry not found" });
    }
    res.status(200).json({ success: true, message: "Inquiry deleted" });
  } catch (err) {
    console.error("Delete Inquiry Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};