import axios from 'axios';
import {
  BaseUrlUsers, BaseUrlClients, BaseUrlDemands, BaseUrlSectors, BaseUrlCargos,
} from '../../../Constants/baseUrl';

export const APIUsers = axios.create({
  baseURL: BaseUrlUsers,
});

export const APIClients = axios.create({
  baseURL: BaseUrlClients,
});

export const APIDemands = axios.create({
  baseURL: BaseUrlDemands,
});

export const APISectors = axios.create({
  baseURL: BaseUrlSectors,
});

export const APICargos = axios.create({
  baseURL: BaseUrlCargos,
});

APIUsers.interceptors.response.use(async (response) => response, (error) => {
  if (error.response.status === 500) {
    localStorage.clear();
    window.location.reload();
  }
  return Promise.reject(error);
});

APIClients.interceptors.response.use(async (response) => {
  try {
    const authToken = await response.status;
    if (authToken === 500 || authToken === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return response;
  } catch (err) {
    return response;
  }
}, (error) => {
  if (error.response.status === 500) {
    localStorage.clear();
    window.location.reload();
  }
  return Promise.reject(error);
});

APIDemands.interceptors.response.use(async (response) => {
  try {
    const authToken = await response.status;
    if (authToken === 500 || authToken === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return response;
  } catch (err) {
    return response;
  }
}, (error) => {
  if (error.response.status === 500) {
    localStorage.clear();
    window.location.reload();
  }
  return Promise.reject(error);
});

APISectors.interceptors.response.use(async (response) => {
  try {
    const authToken = await response.status;
    if (authToken === 500 || authToken === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return response;
  } catch (err) {
    return response;
  }
}, (error) => {
  if (error.response.status === 500) {
    localStorage.clear();
    window.location.reload();
  }
  return Promise.reject(error);
});
