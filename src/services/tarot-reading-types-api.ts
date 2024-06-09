import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, removeLocalStorage } from '../helpers/LocalStorage';
import { ITarotReadingType } from '../interfaces/ITarotReadingType';

export const api = axios.create();

const endpoints = ['login'];

const checkEndpoint = (url: any) => {
  return endpoints.some((endpoint: any) => url.includes(endpoint));
};

api.interceptors.request.use(
  (config) => {
    const token = getLocalStorage('auth')?.user?.token;
    config.baseURL = process.env.REACT_APP_BASE_URL;

    if (token && !checkEndpoint(config?.url)) {
      config.headers['Authorization'] = token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      removeLocalStorage('auth');
      removeLocalStorage('userId');
      useNavigate();
      return;
    }
    return Promise.reject(error);
  }
);

export const getTarotReadingTypes = (type?: number) => {
  return api
    .get(`stores${type ? `?type=${type}` : ''}`)
    .then((response) => response)
    .catch((err) => err);
};

export const newTarotReadingType = (tarotReadingType: ITarotReadingType) => {
  return api
    .post(`stores`, { ...tarotReadingType, userId: getLocalStorage('userId') })
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};

export const updateTarotReadingType = (tarotReadingType: ITarotReadingType) => {
  return api
    .put(`stores/${tarotReadingType._id}`, tarotReadingType)
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};

export const deleteTarotReadingType = (id: string) => {
  return api
    .delete(`stores/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};
