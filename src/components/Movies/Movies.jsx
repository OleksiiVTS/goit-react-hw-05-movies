import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { getApi } from 'components/API/Api';
import { useCallback, useEffect, useState } from 'react';
import { SerchContainer, SerchForm } from './Movies.styled';

const Movies = () => {
  const [dataSabmits, setDataSabmit] = useState([]);
  const [serchValueData, setSerchValueData] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const getSerchMovie = `search/movie`;

  const getSerchRequest = useCallback(
    async serch => {
      try {
        const { data } = await getApi(getSerchMovie, serch);
        if (data.results.length > 0) {
          navigate(`?query=${serch}`, { replace: true });
          setDataSabmit(data.results);
        } else alert('Sorry, there is no movie with that name!');
      } catch (error) {
        alert(error.message);
      }
    },
    [getSerchMovie, navigate]
  );

  const handleSubmit = evt => {
    evt.preventDefault();
    setSerchValueData(evt.target.input.value);
    evt.target.input.value = '';
  };

  useEffect(() => {
    if (!serchValueData) {
      return;
    }
    getSerchRequest(serchValueData);
  }, [getSerchRequest, serchValueData]);

  useEffect(() => {
    if (!location.search || dataSabmits.length > 0) {
      return;
    }
    const query = searchParams.get('query');
    getSerchRequest(query);
  }, [dataSabmits.length, getSerchRequest, location.search, searchParams]);

  return (
    <SerchContainer>
      <SerchForm onSubmit={handleSubmit}>
        <label>
          <input name="input" type="text" />
        </label>
        <button name="submit" type="submit">
          Serch
        </button>
      </SerchForm>
      <ul>
        {dataSabmits.length > 0 &&
          dataSabmits.map(({ id, title, name }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`${id}`}>
                {title || name}
              </Link>
            </li>
          ))}
      </ul>
    </SerchContainer>
  );
};

export default Movies;
