import React, { useEffect, useState } from "react";
import { getReviews } from "../api";
import ReviewCard from "./ReviewCard";
import pageBanner from "../assets/images/pageBanner.png";
import { useSearchParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryParams] = useSearchParams();
  const category = categoryParams.get("category");

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = category
        ? await getReviews(category)
        : await getReviews();
      setReviews(reviewList);
    };
    fetchReviews();
    setIsLoading(false);
  }, [category]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="reviews-container">
      <section className="divider"></section>
      <img src={pageBanner} alt="retro" className="page-banner" />
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default Reviews;
