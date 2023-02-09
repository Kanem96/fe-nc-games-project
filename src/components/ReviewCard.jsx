import React from "react";
import { Link } from "react-router-dom";
import { formatDateAndTime } from "../utils";
const ReviewCard = ({ review }) => {
  return (
    <Link to={`/reviews/${review.review_id}`} className="link">
      <div className="review-card">
        <img
          src={review.review_img_url}
          alt={review.title}
          className="review-card-img"
        ></img>
        <div className="review-card-text">
          <h3>{review.title}</h3>
          <p>{formatDateAndTime(review.created_at)}</p>
          <p>{review.votes} Votes</p>
          <p>{review.comment_count} Comments</p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
