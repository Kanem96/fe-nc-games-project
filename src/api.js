import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://kanes-games.onrender.com/api",
});

export const getReviews = async (category) => {
  let path = "/reviews";
  if (category) path += `?category=${category}`;
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
  const {data} = await gamesAPI.get(`reviews/${reviewId}/comments`)

  return data.comments;
}
export const patchNewVote = async (reviewId, newVote) => {
  gamesAPI.patch(`/reviews/${reviewId}`, newVote);
};

