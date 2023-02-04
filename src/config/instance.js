import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ee55-196-119-56-183.ngrok.io'
});

export default instance;
