import axios from "axios"

const options = {
  method: 'GET',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWVmZTA2ZmJiZTRiYTdkYjhjYjRjZDFiZDgzYWQ0OCIsInN1YiI6IjY1NjVlMTFkNmY1M2UxMDEwMDE4MGIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nIsnckmg9VNF0bBP1XrN-2PRzbu1-YvztSo5jGmq-rE'
  }
};

export const getTrendingMovies = async () => {
  const { data } = await axios({
    ...options,
    url: 'https://api.themoviedb.org/3/trending/all/day'
  });
  return data.results;
};

export const getMovieById = async (id) => {
  const { data } = await axios({
    ...options,
    url: `https://api.themoviedb.org/3/movie/${id}`
  });
  return data.results;
};


