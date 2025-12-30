import Tour from "../models/TourModel.js";

export const getTours = async (req, res) => {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });;
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTour = async (req, res) => {
  try {
    const tour = new Tour(req.body);
    const savedTour = await tour.save();
    res.status(201).json(savedTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTour)
      return res.status(404).json({ message: "Tour not found" });

    res.json(updatedTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTour = async (req, res) => {
  try {
    const deleted = await Tour.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Tour not found" });

    res.json({ message: "Tour deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
