import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "https://api.freeapi.app",
  // withCredentials: true
})


export const customAxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  // withCredentials: true
})