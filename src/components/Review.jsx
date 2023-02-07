import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../api";
import likeButton from "../assets/icons/like.png";
const Review = () => {
  const [review, setReview] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviewById = async () => {
      const reviewInfo = await getReviewById(id);
      setReview(reviewInfo);
    };
    fetchReviewById();
    setIsLoading(false);
  }, [id]);

  if (isLoading) return <p>Is Loading...</p>;
  const date = new Date(review.created_at);
  const formattedDate = date.toLocaleString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <section className="review-container">
      <h1 className="review-title">{review.title}</h1>
      <img
        src={review.review_img_url}
        alt={review.title}
        className="review-img"
      ></img>
      <h3 className="review-creator">{review.designer}</h3>
      <p className="creation-time">{formattedDate}</p>
      <button className="vote-container">
        <img src={likeButton} alt="like button" className="thumb-icon" />
        <p>{review.votes}</p>
      </button>
      <p className="review-body">{review.review_body}</p>
      <div className="comments-container">
        <p>{review.comment_count} Comments</p>
        {}
      </div>
    </section>
  );
};

export default Review;
