import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = 'cea998c46440a68270a30d11e0f1e67e';
export const getTrendingMovies = () => {
  return axios.get(`/trending/all/day?api_key=${key}`);
};

export const getMovieById = id => {
  return axios.get(`/movie/${id}?api_key=${key}&language=en-US`);
};

export const getMovieCast = id => {
  return axios.get(`/movie/${id}/credits?api_key=${key}`);
};

export const getMovieReviews = id => {
  return axios.get(`/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`);
};

export const getMoviesByQuery = query => {
  return axios.get(
    `/search/movie?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=false`,
  );
};
