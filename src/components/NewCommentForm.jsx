import React, { useState } from "react";
import { postComment } from "../api";

const NewCommentForm = ({ reviewId, setCommentCount }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment);
    const postNewComment = async () => {
      await postComment(reviewId, newComment);
      setCommentCount((currentCount) => currentCount + 1);
    };
    postNewComment();
    setIsFocused(false);
    setNewComment({
      username: "",
      body: "",
    });
  };

  const handleChange = (event) => {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="comment-text-box"
        name="body"
        value={newComment.body}
        onFocus={() => setIsFocused(true)}
        onChange={handleChange}
        placeholder="What do you think ?"
        required
      />
      {isFocused ? (
        <section className="submit-container">
          <label className="username-label" htmlFor="username">
            Username:
          </label>
          <input
            name="username"
            type="text"
            className="username-text-box"
            required
            placeholder="grumpy19"
            value={newComment.username}
            onChange={handleChange}
          ></input>
          <button className="submit-btn">Post</button>
        </section>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default NewCommentForm;
