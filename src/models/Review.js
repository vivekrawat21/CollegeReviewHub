import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

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
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Review =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default Review;
