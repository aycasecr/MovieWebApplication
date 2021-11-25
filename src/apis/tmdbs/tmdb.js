import axios from "axios";

import { TMDB_API_KEY } from "./key";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=" + TMDB_API_KEY + "&language=en-US&page=1",

});
