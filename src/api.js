import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://kanes-games.onrender.com/api",
});

export const getReviews = async () => {
  let path = "/reviews";

  const { data } = await gamesAPI.get(path);
  return data.reviews;
};

export const getReviewById = async (reviewId) => {
  const { data } = await gamesAPI.get(`/reviews/${reviewId}`);

  return data.review[0];
};

export const patchNewVote = async (reviewId, newVote) => {
  gamesAPI.patch(`/reviews/${reviewId}`, newVote)
}
