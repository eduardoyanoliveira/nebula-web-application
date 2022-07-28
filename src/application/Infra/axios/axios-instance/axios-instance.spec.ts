import { InMemoryDeleteItemFromLocalStorage, InMemoryGetItemFromLocalStorage } from "../../../tests/Cache/in-memory-local-storage";
import { SetUpAxiosInstance } from "./axios-instance";

describe('Axios Instance', () => {

    const deleteItemFromCache = new InMemoryDeleteItemFromLocalStorage();
    const getItemFromCache = new InMemoryGetItemFromLocalStorage<string>();
    
    it('should be able to create an axios instance', () => {
        const response = new SetUpAxiosInstance(
            'http://localhost:3333', 
            deleteItemFromCache,
            getItemFromCache
        ).create();
        
        expect(response).toBeTruthy()
    });
});