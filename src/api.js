import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://kanes-games.onrender.com/api",
});

export const getReviews = async (query) => {
  let path = "/reviews";
  if (query.category && query.filterName) {
    path += `?category=${query.category}&sort_by=${query.filterName}&order=${query.filterOrder}`;
  } else if (query.category) {
    path += `?category=${query.category}`;
  } else if (query.filterName) {
    path += `?sort_by=${query.filterName}&order=${query.filterOrder}`;
  }
  const { data } = await gamesAPI.get(path);
  return data.reviews;
};

export const getReviewById = async (reviewId) => {
  const { data } = await gamesAPI.get(`/reviews/${reviewId}`);

  return data.review[0];
};

export const getCategories = async () => {
  const { data } = await gamesAPI.get("/categories");

  return data.categories;
};

export const getComments = async (reviewId) => {
  const { data } = await gamesAPI.get(`reviews/${reviewId}/comments`);

  return data.comments;
};

export const postComment = async (reviewId, newComment) => {
  gamesAPI
    .post(`/reviews/${reviewId}/comments`, newComment)
    .catch((error) => console.log(error));
};

export const patchNewVote = async (reviewId, newVote) => {
  gamesAPI.patch(`/reviews/${reviewId}`, newVote);
};

export const deleteCommentByCommentId = async (commentId) => {
  gamesAPI
    .delete(`/comments/${commentId}`)
    .catch((error) => console.log(error));
};
