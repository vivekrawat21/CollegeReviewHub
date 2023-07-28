import BackButton from "@/components/BackButton";
import React from "react";

const ReviewSubmission = () => {
  const [reviews, setReviews] = React.useState({
    collegeName: "",
    review: "",
  });

  const handleReview = () => {
    fetch("http://localhost:3000/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 h-[90vh] mt-10 relative">
      <BackButton link="/Review" />
      <h1
        className="text-4xl font-bold my-10 pt-10
      bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent
      "
      >
        Submit Your Review
      </h1>
      <form className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="collegeName" className="text-lg font-semibold">
            College Name
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            placeholder="Enter the college name"
            onChange={(e) =>
              setReviews({ ...reviews, collegeName: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="review" className="text-lg font-semibold">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            rows={6}
            className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            placeholder="Write your review here"
            onChange={(e) => setReviews({ ...reviews, review: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-950 text-white py-2 px-6 rounded-lg font-bold hover:bg-gray-700"
            onClick={handleReview}
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewSubmission;
