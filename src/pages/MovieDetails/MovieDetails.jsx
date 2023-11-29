import { useEffect, useState } from 'react';
import { getMovieById } from '../../helper/api';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const basePosterPath = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const checkMovieById = async () => {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
      } catch (e) {
        console.log(e);
      }
    };
    checkMovieById();
  }, [movieId]);

  return (
    <div>
      {movie.poster_path && movie.poster_path !== '' ? (
        <img src={basePosterPath + movie.poster_path} alt="Movie Poster" />
      ) : (
        <p>No poster available</p>
      )}
      <div>
        <h2>{movie.original_title}</h2>
        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        <ul>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
            <ul>
              {movie.genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Review</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
