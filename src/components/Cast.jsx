import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();

  return <h1>Cast: {params.movieId}</h1>;
};

export default Cast;
