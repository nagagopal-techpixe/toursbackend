import mongoose from "mongoose";

const ItinerarySchema = new mongoose.Schema({
  day: Number,
  title: String,
  desc: String
});

const TourSchema = new mongoose.Schema(
  {
    title: String,
    duration: String,
  price: {
  type: String,
  set: v => `$${v}` // prepends "$" to whatever value comes in
},
    region: String,
    theme: String,
    image: String,
    description: String,
    itinerary: [ItinerarySchema]
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", TourSchema);

export default Tour;
