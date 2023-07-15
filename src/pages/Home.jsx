import { Link, useLocation } from 'react-router-dom';
import { getApi } from 'components/API/Api';
import { useState, useEffect } from 'react';

const getTrending = 'trending/all/day';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getApi(getTrending);
        setMovies(data.results);
      } catch (error) {
        alert(error.message);
      }
    };

    getRequest();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`movies/${id}`}>
                {title || name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
