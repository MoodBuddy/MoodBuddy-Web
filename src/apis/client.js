import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
client.defaults.withCredentials = true;

const token = localStorage.getItem('token');

client.defaults.headers.common['Authorization'] = token ? `${token}` : null;

export default client;
