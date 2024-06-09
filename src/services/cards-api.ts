import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, removeLocalStorage } from '../helpers/LocalStorage';
import { ICard } from '../interfaces/ICard';

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

export const getCards = (type?: number) => {
  return api
    .get(`categories${type ? `?type=${type}` : ''}`)
    .then((response) => response)
    .catch((err) => err);
};



export const newCard = (card: ICard) => {
  return api
    .post(`categories`, {...card, userId: getLocalStorage('userId')})
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};

export const updateCard = (card: ICard) => {
  return api
    .put(`categories/${card._id}`, card)
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};

export const deleteCard = (id: string) => {
  return api
    .delete(`categories/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};
