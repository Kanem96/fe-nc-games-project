import React from "react";
import likeButton from "../assets/icons/like.png";
import { formatDateAndTime } from "../utils";

const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <h4 className="comment-author">{comment.author}</h4>
      <p className="creation-time">{formatDateAndTime(comment.created_at)}</p>
      <p className="comment-body">{comment.body}</p>
      <button className="vote-container">
        <img src={likeButton} alt="like button" className="thumb-icon" />
        <p>{comment.votes}</p>
      </button>
    </li>
  );
};

export default CommentCard;
