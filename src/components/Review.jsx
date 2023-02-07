import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, patchNewVote } from "../api";
import likeButton from "../assets/icons/like.png";
const Review = () => {
  const [review, setReview] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchReviewById = async () => {
      const reviewInfo = await getReviewById(id);
      setReview(reviewInfo);
      setVoteCount(reviewInfo.votes);
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

  const updateVoteCount = () => {
    const newVote = !isClicked ? { inc_votes: 1 } : { inc_votes: -1 };
    patchNewVote(id, newVote);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(!isClicked);
    setVoteCount((currentVoteCount) => {
      return !isClicked ? currentVoteCount + 1 : currentVoteCount - 1;
    });
    updateVoteCount();
  };

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
      <button className="vote-container" onClick={handleClick}>
        <img src={likeButton} alt="like button" className="thumb-icon" />
        <p>{voteCount}</p>
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
