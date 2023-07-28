import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Please provide a heading"],
  },

  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
});

const Review =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default Review;
