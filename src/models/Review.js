const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: [true, "Please provide a heading"],
  },

  review: {
    type: String,
    required: [true, "Please provide a description"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Review =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default Review;
