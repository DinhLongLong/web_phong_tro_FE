import axios from "axios";
import cookie from "react-cookies";

const SERVER = "http://192.168.43.154:8080/";
const BASE_URL = `${SERVER}WebPhongTroSpringMVC/`;
const API_SLUG = "api";

export const endpoints = {
  categories: `${API_SLUG}/categories`,
};

export const authEndpoints = {
  login: `${API_SLUG}/auth/login`,
  "current-user": `${API_SLUG}/auth/current-user`,
};

const instance = axios.create({
  baseURL: BASE_URL,
});

export const authApi = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: cookie.load("token"),
    },
  });
};

export default instance;
