"use client"
import React, { useState } from "react";

const ReviewsPage = () => {
  const reviews = [
        {
          id: 1,
          collegeName: "ABC College",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim urna sit amet lacus euismod hendrerit.",
        },
        {
          id: 2,
          collegeName: "XYZ University",
          review:
            "In vel odio consectetur, tristique purus ac, volutpat lorem. Sed eu gravida felis. Aliquam vitae sapien ac purus placerat egestas.",
        },
        {
          id: 3,
          collegeName: "PQR Institute",
          review:
            "Vestibulum in tristique dui, quis bibendum nulla. Etiam et arcu at sem luctus tincidunt eu eget nisi.",
        },
      ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredReviews = reviews.filter((review:any) =>
    review.collegeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a college..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 h-60 flex flex-col justify-center hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{review.collegeName}</h2>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
