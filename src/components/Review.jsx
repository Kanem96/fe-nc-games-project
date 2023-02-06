import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../api";
const Review = () => {
  const [review, setReview] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchReviewById = async () => {
      const reviewInfo = await getReviewById(id);
      setReview(reviewInfo);
    };
    fetchReviewById();
  }, [id]);

  return (
    <section>
      <p>Review</p>
      <p>{review.title}</p>
    </section>
  );
};

export default Review;
