import { getTokenFromCache, removeTokenFromCache } from '../../../useCases/Token';
import { SetUpAxiosInstance } from './axios-instance';


export const axiosInstance = new SetUpAxiosInstance(
    'http://localhost:3333', removeTokenFromCache, getTokenFromCache
).create();
