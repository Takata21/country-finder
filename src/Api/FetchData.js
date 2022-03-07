import axios from 'axios';
export const API_URL = process.env.REACT_APP_BASE_URL_API;
export const fetchData = async (url) => {
  const data = await axios.get(url).catch((err) => console.log(err));
  return data;
};
