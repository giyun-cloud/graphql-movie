import fetch from "node-fetch";
const BASE_URL = "https://yts.mx/api/v2/list_movies.json?";
export const getMovies = (limit, rating) => {
  let RESULT_URL = BASE_URL;
  if (limit > 0) RESULT_URL += `limit=${limit}`;
  if (rating > 0) RESULT_URL += `&minimum_rating=${rating}`;
  return fetch(RESULT_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
