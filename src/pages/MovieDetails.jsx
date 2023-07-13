import { useCallback, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getApi } from 'components/API/Api';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const params = useParams();
  const getMovie = `movie/${params.movieId}`;
  const location = useLocation();
  // const backLinkHref = useRef(location.state?.from ?? '/');

  const getRequest = useCallback(async () => {
    try {
      const { data } = await getApi(getMovie);
      setMovieInfo(data);
    } catch (error) {
      alert(error.message);
    }
  }, [getMovie]);

  useEffect(() => {
    getRequest();
  }, [getRequest]);

  const { poster_path, title, name, overview, genres } = movieInfo;
  return (
    <>
      <section>
        <Link to={location.state?.from ?? '/'}>&#129044; Go back</Link>
        <div>
          <img
            src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title || name}
          />
        </div>
        <div>
          <h2>{title || name}</h2>
          <p></p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres &&
              genres.map(({ name }) => <span key={name}>{name}, </span>)}
          </p>
        </div>
      </section>
      <section>
        <ul>
          <h3>MovieDetails: {params.movieId}</h3>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <li>
            <Link to="cast">Cast</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </>
  );
};

export default MovieDetails;
