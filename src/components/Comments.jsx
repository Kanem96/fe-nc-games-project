import React, { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

const Comments = ({ reviewId, commentsList, setCommentsList }) => {
  const [commentCount, setCommentCount] = useState(0);
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
