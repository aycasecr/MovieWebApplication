import axios from "axios";

import { TMDB_API_KEY } from "./key";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1",
  params: {
    api_key: "374c33af371a54f60b20532a4a9e7791"
  }
});
