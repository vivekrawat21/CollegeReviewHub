const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: [true, "Please provide a college name"],
  },

  review: {
    type: String,
    required: [true, "Please provide a description"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  creator: {
    type: String,
  },
  creatorImgUrl: {
    type: String,
  },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
