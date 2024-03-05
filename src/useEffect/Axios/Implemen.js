/** @format */

import React from "react";
import { useEffect } from "react";
import axios from "axios";
import requests from "./request";
import { useState } from "react";
function Implemen() {
  const fetchUrl = requests.fetchActionMovies;
  const [movies, setMovies] = useState([]);
  // you can also pass this as props
  //e.g <Row title='Trending Now' fetchUrl={requests.fetchTrendingMovies} />
  useEffect(() => {
    async function fetchData(param) {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return <div>{movies}</div>;
}

export default Implemen;
