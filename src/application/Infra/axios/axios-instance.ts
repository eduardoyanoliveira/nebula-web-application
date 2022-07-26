import axios, { AxiosError } from 'axios';
import { signOut } from '../../features/Authentication/contexts/AuthContext/sign-out';
import { AuthTokenError } from '../../Errors/AuthTokenError';

export function setUpAxiosInstance(){

    const instance = axios.create({
        baseURL: 'http://localhost:3333',
        timeout: 2000,
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    instance.interceptors.response.use( response => {
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

    return instance;
};

export const axiosInstance = setUpAxiosInstance();
