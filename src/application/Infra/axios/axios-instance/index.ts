import { DeleteItemFromLocalStorage } from '../../../useCases/Cache/delete-from-local-storage';
import { GetItemfromLocalStorage } from '../../../useCases/Cache/get-item-from-local-storage';
import { SetUpAxiosInstance } from './axios-instance';


const deleteItemFromCache = new DeleteItemFromLocalStorage();
const getItemFromCache = new GetItemfromLocalStorage<string>();

export const axiosInstance = new SetUpAxiosInstance(
    'http://localhost:3333',deleteItemFromCache, getItemFromCache
).create();
