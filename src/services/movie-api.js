import axios from 'axios';

const API_KEY = 'ed9b8dd4dcf22d9d746c4e21c6321e97';
const API_BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = API_BASE_URL;

export const fetchMovies = async page => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data.results;
};
