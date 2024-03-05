/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// axios create allows us to add a get request . it will attach or append to it
// a good pattern to use when dealing with a large api call
// check the requets.js file
