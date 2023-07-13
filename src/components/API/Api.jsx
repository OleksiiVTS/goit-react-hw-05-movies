import axios from 'axios';

const API_KEY = 'ef9672eaedc4c7a706bb2535d3c45cc4';
const URL = 'https://api.themoviedb.org/3/';

export const getApi = async (apiTipe, dataSubmit) => {
  const response = await axios.get(
    `${URL}${apiTipe}?api_key=${API_KEY}${
      dataSubmit ? `&query=${dataSubmit}` : ''
    }&language=en-US`
  );
  // console.log(response);
  return response;
};
