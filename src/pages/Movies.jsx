import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <h1>Movies</h1>
      <form action="">
        <label htmlFor="">
          <input type="text" />
        </label>
        <button type="submit">Serch</button>
      </form>
      <ul>
        <li>
          <Link to="1">movies1</Link>
        </li>
        <li>
          <Link to="2">movies2</Link>
        </li>
        <li>
          <Link to="3">movies3</Link>
        </li>
        <li>
          <Link to="4">movies4</Link>
        </li>
      </ul>
    </>
  );
};

export default Movies;
