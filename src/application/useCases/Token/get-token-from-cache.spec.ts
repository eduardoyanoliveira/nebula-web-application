import { InMemoryGetItemFromLocalStorage, inMemoryLocalStorage } from "../../tests/Cache/in-memory-local-storage";
import { GetTokenFromCache } from "./get-token-from-cache";

describe('Get Token From Cache', () => {

    const tokenString = 'kjsfasidjfas-dgpajgihaeuwrighru';
    const getItemFromCache = new InMemoryGetItemFromLocalStorage<string>(); 

    (inMemoryLocalStorage as any)['@token'] = tokenString;


    it('should fail with the key token does not exists on cache', () => {

        const getTokenFromCache = new GetTokenFromCache(getItemFromCache, '@key');

        const response = getTokenFromCache.execute();

        expect(response.isFailure).toBeTruthy();
    });

    it('should be able to get the token from cache', () => {

        const getTokenFromCache = new GetTokenFromCache(getItemFromCache, '@token');
        
        const response = getTokenFromCache.execute();

        expect(response.isSuccess).toBeTruthy();
        expect(response.getValue()).toBe(tokenString);
    });

});