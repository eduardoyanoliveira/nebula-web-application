import axios, { AxiosError } from 'axios';
import { IGetToken } from '../../../Domain/Token/IGetToken';
import { IRemoveToken } from '../../../Domain/Token/IRemoveToken';
import { AuthTokenError } from '../../../Errors/AuthTokenError';

export class SetUpAxiosInstance{

    constructor(
        private baseURL: string,
        private RemoveToken: IRemoveToken,
        private GetToken: IGetToken
    ){};

    create(){

        let token;

        const tokenResponse = this.GetToken.execute();

        if(tokenResponse.isFailure){
            token = '';
        }else{
            token = tokenResponse.getValue();
        };

        const instance = axios.create({
            baseURL: this.baseURL,
            timeout: 2000,
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    
        instance.interceptors.response.use( response => {
            return response;
        }, (error : AxiosError) => {
            if(error.response?.status === 401){
                if(typeof window !== undefined){
                    this.RemoveToken.execute();
                }else{
                    return Promise.reject( new AuthTokenError())
                }
            };
    
            return Promise.reject(error);
        });
    
        return instance;
    };
};

