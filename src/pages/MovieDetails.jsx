import { Outlet, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>MovieDetails: {params.movieId}</h1>
      <ul>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
