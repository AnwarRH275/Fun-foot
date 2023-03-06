import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://23eb-105-66-2-247.ngrok.io'
});

export default instance;
