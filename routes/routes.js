import express from "express";
import * as TourController from "../controllers/TourController.js";
import { getLeads, createLead,updateLeadStatus ,deleteLead} from "../controllers/LeadController.js";
import {
  submitInquiry,
  getInquiries,
  getInquiryById,
  updateInquiryStatus,
  deleteInquiry
} from "../controllers/content.js";
const router = express.Router();
import { signup, login,changePassword } from "../controllers/auth.js";


//auth
router.post("/signup", signup);
router.post("/login", login);
router.patch("/change-password", changePassword);
//content
router.get("/content", getInquiries);
router.post("/content", submitInquiry);
router.get("/content/:id", getInquiryById);
router.patch("/content/:id/status", updateInquiryStatus);
router.delete("/content/:id", deleteInquiry);
// Lead routes (specific)
router.get("/enquiries", getLeads);
router.post("/enquiries", createLead);
router.patch("/enquiries/:id/status", updateLeadStatus);
router.delete("/enquiries/:id", deleteLead);
// Tour routes
router.get("/", TourController.getTours);
router.post("/", TourController.createTour);
router.get("/:id", TourController.getTour);
router.patch("/:id", TourController.updateTour);
router.delete("/:id", TourController.deleteTour);



export default router;
