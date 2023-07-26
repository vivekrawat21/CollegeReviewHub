import React from "react";

const ReviewSubmission = () => {
  return (
    <div className="container mx-auto px-4 py-8 h-[90vh] mt-10">
      <h1 className="text-4xl font-bold mb-6
      bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent
      ">Submit Your Review</h1>
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
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-gray-950 text-white py-2 px-6 rounded-lg font-bold hover:bg-gray-700">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewSubmission;
