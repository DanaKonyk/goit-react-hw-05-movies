import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../helper/api';
import MoviesList from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <main>
      <h1>Trendings today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
