import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://studyingroup.herokuapp.com/',
});
