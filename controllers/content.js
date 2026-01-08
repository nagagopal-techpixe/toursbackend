import Inquiry from "../models/content.js";

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

    return res.status(201).json({
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
