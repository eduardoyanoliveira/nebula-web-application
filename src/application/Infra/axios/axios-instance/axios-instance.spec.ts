import { InMemoryDeleteItemFromLocalStorage, InMemoryGetItemFromLocalStorage } from "../../../tests/Cache/in-memory-local-storage";
import { GetTokenFromCache } from "../../../useCases/Token/get-token-from-cache";
import { RemoveTokenFromCache } from "../../../useCases/Token/remove-token-from-cache";
import { SetUpAxiosInstance } from "./axios-instance";

describe('Axios Instance', () => {

    const deleteItemFromCache = new InMemoryDeleteItemFromLocalStorage();
    const removeTokenFromCache = new RemoveTokenFromCache(deleteItemFromCache, '@token');

    const getItemFromCache = new InMemoryGetItemFromLocalStorage<string>();
    const getTokenFromCache = new GetTokenFromCache(getItemFromCache, '@token');
    
    it('should be able to create an axios instance', () => {
        const response = new SetUpAxiosInstance(
            'http://localhost:3333', 
            removeTokenFromCache,
            getTokenFromCache
        ).create();
        
        expect(response).toBeTruthy()
    });
});