import React, { useEffect, useState } from "react";
import { getReviews } from "../api";
import ReviewCard from "./ReviewCard";
import pageBanner from "../assets/images/pageBanner.png";
import Nav from "./Nav";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = await getReviews();
      setReviews(reviewList);
    };
    fetchReviews();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="reviews-container">
      <Nav /> 
      <section className="divider"></section>
      <img src={pageBanner} alt="retro" className="page-banner" />
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default Reviews;
