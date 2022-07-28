import axios, { AxiosError } from 'axios';
import { IDeleteItemFromCache } from '../../../Domain/Cache/IDeleteItemFromCache';
import { IGetItemFromCache } from '../../../Domain/Cache/IGetItemFromCache';
import { AuthTokenError } from '../../../Errors/AuthTokenError';

export class SetUpAxiosInstance{

    constructor(
        private baseURL: string,
        private DeleteItemFromCache: IDeleteItemFromCache,
        private GetItemFromCache: IGetItemFromCache<string>
    ){};

    create(){
        const instance = axios.create({
            baseURL: this.baseURL,
            timeout: 2000,
            headers:{
                Authorization: `Bearer ${localStorage.getItem('@token')}`
            }
        });
    
        instance.interceptors.response.use( response => {
            return response;
        }, (error : AxiosError) => {
            // if(error.response?.status === 401){
            //     if(typeof window !== undefined){
            //         this.DeleteItemFromCache.execute('@token');
            //     }else{
            //         return Promise.reject( new AuthTokenError())
            //     }
            // };
    
            return Promise.reject(error);
        });
    
        return instance;
    };
};
