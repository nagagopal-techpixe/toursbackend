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
  type: String  //  Just store plain number as string, no setter
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
