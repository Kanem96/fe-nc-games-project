import React, { useEffect, useState } from "react";
import { getReviews } from "../api";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = await getReviews();
      setReviews(reviewList);
      setIsLoading(false);
    };
    fetchReviews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="reviews-container">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default Reviews;
