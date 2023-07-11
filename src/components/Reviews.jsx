import { useParams } from 'react-router-dom';

const Reviews = () => {
  const params = useParams();
  return <h1>Reviews: {params.movieId}</h1>;
};

export default Reviews;
