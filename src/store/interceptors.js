import axios from '../axios-api';

const configureInterceptors = () => {
  axios.interceptors.response.use(res => res,
    error => {
      if (!error.response) {
        error.response = {data: {global: 'No connection to server'}};
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    });
};

export default configureInterceptors;
