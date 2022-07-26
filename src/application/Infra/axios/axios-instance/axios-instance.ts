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

    create(multipart?: boolean){

        let token;

        const tokenResponse = this.GetToken.execute();

        if(tokenResponse.isFailure){
            token = '';
        }else{
            token = tokenResponse.getValue();
        };

        let headers = {};

        if(multipart){
            headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            };
        }else{
            headers = {
                Authorization: `Bearer ${token}`
            };
        };

        const instance = axios.create({
            baseURL: this.baseURL,
            timeout: 4000,
            headers
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

