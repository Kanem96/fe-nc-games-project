import React, { useEffect, useState } from "react";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = await getReviews();
      setReviews(reviewList);
    };
    fetchReviews();
  }, []);

  return (
    <section>
      {reviews.map((review) => {
        return <p key={review.review_id}>{review.title}</p>;
      })}
    </section>
  );
};

export default Reviews;
