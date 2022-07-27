import { InMemoryDeleteItemFromLocalStorage } from "../../../tests/Cache/in-memory-local-storage";
import { SetUpAxiosInstance } from "./axios-instance";

describe('Axios Instance', () => {

    const deleteItemFromCache = new InMemoryDeleteItemFromLocalStorage();
    
    it('should be able to create an axios instance', () => {
        const response = new SetUpAxiosInstance('http://localhost:3333', deleteItemFromCache).create();
        expect(response).toBeTruthy()
    });
});