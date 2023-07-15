import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getApi } from 'components/API/Api';
import {
  MoviesGoBack,
  MoviesSection,
  DataMovie,
  MoviesContainer,
  AdditionalUl,
  AdditionalLink,
  CastImg,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [
    { poster_path, title, name, vote_average, overview, genres, release_date },
    setMovieInfo,
  ] = useState({});
  const params = useParams();
  const getMovie = `movie/${params.movieId}`;
  const location = useLocation();
  const pageMovies = `/movies/${params.movieId}`;
  // const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getApi(getMovie);
        setMovieInfo(data);
      } catch (error) {
        alert(error.message);
      }
    };

    getRequest();
  }, [getMovie]);

  const chekPage = page => {
    return location.pathname === `${pageMovies}/${page}`;
  };

  return (
    <>
      <MoviesSection>
        <MoviesContainer>
          <MoviesGoBack to={location.state?.from ?? '/'}>
            &#129044; Go back
          </MoviesGoBack>
          <DataMovie>
            <div>
              <img
                src={
                  poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
                }
                alt={title || name}
              />
            </div>
            <div>
              <h2>
                {title || name}
                {`(${release_date?.slice(0, 4)})`}
              </h2>
              <p>User Score: {vote_average?.toFixed(2)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>
                {genres?.map(({ name }) => (
                  <span key={name}>{name}, </span>
                ))}
              </p>
            </div>
          </DataMovie>
        </MoviesContainer>
      </MoviesSection>
      <section>
        <MoviesContainer>
          <h4>Additional information</h4>
          <AdditionalUl>
            <li>
              <AdditionalLink to={chekPage(`reviews`) ? pageMovies : `reviews`}>
                Reviews
              </AdditionalLink>
            </li>
            <li>
              <AdditionalLink
                state={{ from: location }}
                to={chekPage(`cast`) ? pageMovies : `cast`}
              >
                Cast
              </AdditionalLink>
            </li>
          </AdditionalUl>
          <Outlet />
        </MoviesContainer>
      </section>
    </>
  );
};

export default MovieDetails;
