import { DeleteItemFromLocalStorage } from '../../../useCases/Cache/delete-from-local-storage';
import { SetUpAxiosInstance } from './axios-instance';


const deleteItemfromLocalStorage = new DeleteItemFromLocalStorage();
export const axiosInstance = new SetUpAxiosInstance('http://localhost:3333', deleteItemfromLocalStorage).create();
