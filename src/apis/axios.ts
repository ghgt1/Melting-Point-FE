import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error('API 요청중 에러가 발생하였습니다:', error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API 응답중 에러가 발생하였습니다:', error);
    return Promise.reject(error);
  },
);

export default instance;
