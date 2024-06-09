import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, removeLocalStorage } from '../helpers/LocalStorage';
import { ICardType } from '../interfaces/ICardType';

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

export const getCardTypes = () => {
  return api
    .get(`cardTypes`)
    .then((response) => response)
    .catch((err) => err);
};

export const newCardType = (cardType: ICardType) => {
  return api
    .post(`cardTypes`, { ...cardType, userId: getLocalStorage('userId') })
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);
};

export const updateCardType = (cardType: ICardType) => {
  return api
    .put(`cardTypes/${cardType._id}`, cardType)
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};

export const deleteCardType = (id: string) => {
  return api
    .delete(`cardTypes/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};
