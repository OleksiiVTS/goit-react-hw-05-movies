import { useParams } from 'react-router-dom';

const Reviews = () => {
  const params = useParams();

  // const getCredits = `movie/${params.movieId}/credits`;
  // const [movieInfos, setMovieInfo] = useState([]);

  // useEffect(() => {
  //   const getRequest = async () => {
  //     try {
  //       const { data } = await getApi(getCredits);
  //       console.log(data.cast);
  //       setMovieInfo(data.cast);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };

  //   getRequest();
  // }, [getCredits]);

  return (
    <div>
      <h2>Autor: {params.movieId}</h2>
      <p></p>
    </div>
  );
};

export default Reviews;
