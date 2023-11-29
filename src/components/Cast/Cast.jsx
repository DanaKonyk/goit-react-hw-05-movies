import { getCast } from 'helper/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const basePosterPath = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const castById = async () => {
      try {
        const castDetalis = await getCast(movieId);
        if (castDetalis) {
          setCast(castDetalis);
        } else {
          console.log('No cast details available.');
        }
      } catch (e) {
        console.log(e);
      }
    };
    castById();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, profile_path, original_name, character }) => (
          <li key={id}>
            <img src={basePosterPath + profile_path} alt={original_name} />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
