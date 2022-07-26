import axios, { AxiosError } from 'axios';
import { signOut } from '../../../contexts/AuthContext';
import { AuthTokenError } from './Errors/AuthTokenError';

export function setUpAxiosInstance(){

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        timeout: 2000,
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    api.interceptors.response.use( response => {
        return response;
    }, (error : AxiosError) => {
        if(error.response?.status === 401){
            if(typeof window !== undefined){
                signOut();
            }else{
                return Promise.reject( new AuthTokenError())
            }
        };

        return Promise.reject(error);
    });

    return api;
};

export const axiosInstance = setUpAxiosInstance();
