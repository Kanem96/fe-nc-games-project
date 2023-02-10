import React, { useState } from "react";
import likeButton from "../assets/icons/like.png";
import deleteButton from "../assets/icons/delete.png";
import { formatDateAndTime } from "../utils";
import { deleteCommentByCommentId } from "../api";

const CommentCard = ({ comment, setCommentCount }) => {
  const handleClick = (event) => {
    event.preventDefault();
    setCommentCount((currentCount) => --currentCount);
    const deleteComment = async () => {
      await deleteCommentByCommentId(comment.comment_id).catch(() => (
        <p>There was a problem deleting this comment. Please try again</p>
      ));
    };
    deleteComment();
  };

  return (
    <li className="comment-card">
      <h4 className="comment-author">{comment.author}</h4>
      <p className="creation-time">{formatDateAndTime(comment.created_at)}</p>
      <p className="comment-body">{comment.body}</p>
      <button className="vote-container">
        <img src={likeButton} alt="like button" className="thumb-icon" />
        <p>{comment.votes}</p>
      </button>
      <button className="delete-comment-btn" onClick={handleClick}>
        <img src={deleteButton} alt="delete button" />
      </button>
    </li>
  );
};

export default CommentCard;
