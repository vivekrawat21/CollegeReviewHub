import React from 'react';

const ReviewsPage = () => {
  // Hardcoded reviews data
  const reviews = [
    {
      id: 1,
      collegeName: 'ABC College',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim urna sit amet lacus euismod hendrerit.',
    },
    {
      id: 2,
      collegeName: 'XYZ University',
      review:
        'In vel odio consectetur, tristique purus ac, volutpat lorem. Sed eu gravida felis. Aliquam vitae sapien ac purus placerat egestas.',
    },
    {
      id: 3,
      collegeName: 'PQR Institute',
      review:
        'Vestibulum in tristique dui, quis bibendum nulla. Etiam et arcu at sem luctus tincidunt eu eget nisi.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">All Reviews</h1>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{review.collegeName}</h2>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
