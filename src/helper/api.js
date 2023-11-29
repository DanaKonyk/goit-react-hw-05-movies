import axios from "axios"

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'aeefe06fbbe4ba7db8cb4cd1bd83ad48';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

  return data.results;
};

export const getMovieById = async id => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
    return data.cast;
};
