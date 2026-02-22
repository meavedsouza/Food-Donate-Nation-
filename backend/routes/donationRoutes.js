import express from "express";
import Donation from "../models/Donation.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const donation = new Donation(req.body);
    const savedDonation = await donation.save();
    res.status(201).json(savedDonation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;