import fetch from "node-fetch";
const BASE_URL = "https://yts.mx/api/v2/list_movies.json";
export const getMovies = () => {
  fetch(`${BASE_URL}`)
    .then((res) => res.json)
    .then((json) => json.data.moives);
};
