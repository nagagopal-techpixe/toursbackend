import express from "express";
import * as TourController from "../controllers/TourController.js";
import { getLeads, createLead } from "../controllers/LeadController.js";
import { submitInquiry } from "../controllers/content.js";
const router = express.Router();

// Lead routes (specific)

router.get("/enquiries", getLeads);
router.post("/enquiries", createLead);

// Tour routes
router.get("/", TourController.getTours);
router.post("/", TourController.createTour);
router.get("/:id", TourController.getTour);
router.put("/:id", TourController.updateTour);
router.delete("/:id", TourController.deleteTour);
//content
router.post("/content", submitInquiry);

export default router;
