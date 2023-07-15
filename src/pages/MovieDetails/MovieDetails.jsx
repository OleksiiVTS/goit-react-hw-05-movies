import { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getApi } from 'components/API/Api';
import { Circles } from 'react-loader-spinner';
import css from '../../components/Loader/Loader.module.css';
import {
  MoviesGoBack,
  MoviesSection,
  DataMovie,
  MoviesContainer,
  AdditionalUl,
  AdditionalLink,
} from './MovieDetails.styled';
import NotFound from 'pages/NotFound';

const MovieDetails = () => {
  const [
    { poster_path, title, name, vote_average, overview, genres, release_date },
    setMovieInfo,
  ] = useState({});
  const [errorRequvest, setErrorRequvest] = useState(false);
  const params = useParams();
  const getMovie = `movie/${params.movieId}`;
  const location = useLocation();
  const pageMovies = `/movies/${params.movieId}`;

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getApi(getMovie);
        setMovieInfo(data);
      } catch (error) {
        setErrorRequvest(true);
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
      {errorRequvest ? (
        <NotFound />
      ) : (
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
                      poster_path &&
                      `https://image.tmdb.org/t/p/w500${poster_path}`
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
          <MoviesSection>
            <MoviesContainer>
              <h4>Additional information</h4>
              <AdditionalUl>
                <li>
                  <AdditionalLink
                    to={chekPage(`reviews`) ? pageMovies : `reviews`}
                  >
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
            </MoviesContainer>
          </MoviesSection>
          <section>
            <MoviesContainer>
              <Suspense
                fallback={
                  <Circles
                    height="80"
                    width="80"
                    color="#4d78a9"
                    wrapperClass={css.loader}
                  />
                }
              >
                <Outlet />
              </Suspense>
            </MoviesContainer>
          </section>
        </>
      )}
    </>
  );
};

export default MovieDetails;
