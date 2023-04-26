import axios from 'axios';
// import { getEnvVaribles } from '../../helpers/getEnvVariables';
// const { VITE_REGISTER_API } = getEnvVaribles();



export const api = axios.create({
    baseURL: 'http://127.0.0.1:8080/api'
});

api.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'authorization': localStorage.getItem('token')
    }

    return config;

});