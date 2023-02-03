import axios from 'axios';

const KEY = 'at_ZaMY3gtGUL61WQdiZGMI9EplzFVRB';

const ipify = axios.create({
  baseURL: 'https://geo.ipify.org/api/v2',
  params: {
    apiKey: KEY,
  },
});

export default ipify;
