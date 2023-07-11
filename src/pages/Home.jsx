import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="movies/1">movies1</Link>
        </li>
        <li>
          <Link to="movies/2">movies2</Link>
        </li>
        <li>
          <Link to="movies/3">movies3</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
