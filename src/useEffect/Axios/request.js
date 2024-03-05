/** @format */

//https://api.themoviedb.org/3/trending/all/day?api_key=5f8bf76fc61ea04d3b471a25fa1dc3a8
const API_KEY = "5f8bf76fc61ea04d3b471a25fa1dc3a8";
// APi request: https://api.themoviedb.org/3/movie/550?api_key=5f8bf76fc61ea04d3b471a25fa1dc3a8
// APi read access token :  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjhiZjc2ZmM2MWVhMDRkM2I0NzFhMjVmYTFkYzNhOCIsInN1YiI6IjYzMDJhYjlhNWY0YjczMDA4MjY4MjExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2d_k44_G9i9rSZ1wMr2b3RILrF17UMNSSVNiRXFdKTI
const requests = {
  fetchTrendingMovies: `/trending/all/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
};

export default requests;
// here is where we will get and append our requets
// check the implment file