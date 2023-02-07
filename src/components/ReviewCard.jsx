import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <Link to={`/reviews/${review.review_id}`} className="link">
      <div className="review-card">
        <img
          src={review.review_img_url}
          alr={review.title}
          className="review-card-img"
        ></img>
        <div className="review-card-text">
          <h3>{review.title}</h3>
          <p>{review.review_body}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
