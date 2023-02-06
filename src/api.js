import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://kanes-games.onrender.com/api",
});

export const getReviews = async () => {
  let path = "/reviews";

  const { data } = await gamesAPI.get(path);
  return data.reviews;
};
