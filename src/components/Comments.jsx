import React, { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

const Comments = ({ reviewId, commentsList, setCommentsList }) => {
  const [commentCount, setCommentCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments(reviewId);
      setCommentCount(comments.length);
      await setCommentsList(comments);
    };
    fetchComments();
  }, [reviewId, commentCount]);

  return (
    <>
      <p className="comments-container-header">{commentCount} Comments</p>
      <form action="" className="form-container">
        <input
          type="text"
          className="comment-text-box"
          onFocus={() => setIsFocused(true)}
          placeholder="What do you think ?"
        />
        {isFocused ? (
          <section className="submit-container">
            <label className="username-label" htmlFor="username-input">
              Username:{" "}
            </label>
            <input
              name="username-input"
              type="text"
              className="username-text-box"
            ></input>
            <button>Submit</button>
          </section>
        ) : (
          <div></div>
        )}
      </form>
      <ul className="comments-container">
        {commentsList.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              setCommentCount={setCommentCount}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
