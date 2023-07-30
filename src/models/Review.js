import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: [true, "Please provide a heading"],
  },

  review: {
    type: String,
    required: [true, "Please provide a description"],
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Review =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default Review;
