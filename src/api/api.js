import axios from 'axios';

const END_POINTAPI = process.env.REACT_APP_API_ENDPOINT;

const api = axios.create({
  baseURL: END_POINTAPI,
});

api.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err);
  }
);

export default api;
