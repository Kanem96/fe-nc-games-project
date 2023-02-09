import React, { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

const Comments = ({ reviewId }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments(reviewId);
      setCommentsList(comments);
    };
    fetchComments();
  }, [reviewId]);


  return (
    <ul className="comments-container">
      {commentsList.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment}/>;
      })}
    </ul>
  );
};

export default Comments;
