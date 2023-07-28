"use client"
import BackButton from "@/components/BackButton";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

interface Review {
  id: number;
  collegeName: string;
  review: string;
}

const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    axios.get<{ reviews: Review[] }>("/api/Reviews") // Adjust the response data type based on your API response
      .then((response) => {
        setReviews(response.data.reviews); // Assuming the response data is an object with a 'reviews' property containing the array of reviews.
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  const filteredReviews = reviews?.filter((review) =>
  review.collegeName.toLowerCase().includes(searchTerm.toLowerCase())
) || [];


  return (
    <div className="container mx-auto px-4 py-8 min-h-screen relative">
      <BackButton link="/" />
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

      <div className="fixed bottom-4 right-4">
        <Link href="ReviewSubmission">
          <button className="bg-gray-950 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 transition-colors duration-300">
            <FaPlus size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewsPage;
