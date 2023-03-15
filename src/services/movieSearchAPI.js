import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTgwN2RlOWE5YjEzNTg0ZjNhNzFlNjM0M2RkYjRjZSIsInN1YiI6IjYzZDNmYjQyZjE0ZGFkMDBiZDQ4MjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3kkZc4VCGcVeJvumOr9cUF9SnkSJkGMQsfEBPaQeCI';

export async function getTrendingMovies() {
  const typeRequest = {
    trends: 'trending/movie/week',
  };
  const options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequest.trends}`;
  const response = await axios.get(url, options);

  return response.data.results;
}

export async function getSearchMovie(searchQuery = '') {
  const typeRequest = {
    search: 'search/movie',
  };
  const options = {
    params: {
      query: searchQuery,
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequest.search}`;
  const response = await axios.get(url, options);

  return response.data.results;
}

export async function getMovieDetails(movieId, type = 'details') {
  const typeRequestById = {
    details: `movie/${movieId}`,
    credits: `movie/${movieId}/credits`,
    reviews: `movie/${movieId}/reviews`,
    videos: `movie/${movieId}/videos`,
  };
  const options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequestById[type]}`;
  const response = await axios.get(url, options);

  return response.data;
}
