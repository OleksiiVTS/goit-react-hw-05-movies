import { getApi } from 'API/Api';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';

const getTrending = 'trending/all/day';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
      <MovieList data={movies} />
    </>
  );
};

export default Home;
