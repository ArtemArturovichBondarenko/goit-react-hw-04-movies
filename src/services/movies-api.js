import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const key = '73eedadfa9d08313f35d1c4a24565e4a';

export const getHomePage = () =>
  axios.get(`${baseUrl}/trending/movie/day?api_key=${key}`);


export const getMoviesSearch = query =>
  axios.get(
    `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
  );

export const getMovieDetails = id =>
  axios.get(`${baseUrl}/movie/${id}?api_key=${key}&language=en-US`);

export const getMovieCredits = id =>
  axios.get(`${baseUrl}/movie/${id}/credits?api_key=${key}`);

export const getMovieReviews = id =>
  axios.get(`${baseUrl}/movie/${id}/reviews?api_key=${key}`);
