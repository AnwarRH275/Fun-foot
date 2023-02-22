import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://5411-105-68-224-29.ngrok.io'
});

export default instance;
