import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getLocalStorage } from "../helpers/helpers";
import { CurrentUser } from "../types/user.type";

const fetcherApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    TOKENCYBERSOFT: import.meta.env.VITE_TOKEN_CYBERSOFT,
  },
});

fetcherApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const user = getLocalStorage<CurrentUser>("CURRENT_USER");
  if (user) {
    config.headers.Authorization = user.accessToken;
  }
  return config;
});

fetcherApi.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default fetcherApi;
