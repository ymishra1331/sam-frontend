import axios from 'axios';
import { api } from './baseUrl';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: api,
    withCredentials: true
});


axiosInstance.interceptors.request.use(
    (config) => {
        const lang = Cookies.get('language') || localStorage.getItem('language') || 'fr-CH,fr;q=0.9';
        config.headers['Accept-Language'] = lang;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
