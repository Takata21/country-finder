import axios from 'axios';
export const API_URL_V3 = process.env.REACT_APP_BASE_URL_API_V3;
export const API_URL_V2 = process.env.REACT_APP_BASE_URL_API;
export const fetchData = async (url) => {
  const data = await axios.get(url).catch((err) => console.log(err));
  return data;
};
