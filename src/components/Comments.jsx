import React, { useEffect, useState } from "react";
import { getComments } from "../api";

const Comments = ({ reviewId }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments(reviewId);
      setCommentsList(comments);
    };
    fetchComments();
    console.log(commentsList);
  }, [reviewId]);

  return (
    <>
      {commentsList.map((comment) => {
        return <p className="comment">{comment.comment_id}</p>;
      })}
</>
  );
};

export default Comments;
