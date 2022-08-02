import { InMemoryDeleteItemFromLocalStorage, inMemoryLocalStorage } from "../../tests/Cache/in-memory-local-storage";
import { RemoveTokenFromCache } from "./remove-token-from-cache";

describe('Remove Token From Cache', () => {

    const tokenString = 'kjsfasidjfas-dgpajgihaeuwrighru';
    const deleteItemFromCache = new InMemoryDeleteItemFromLocalStorage(); 

    (inMemoryLocalStorage as any)['@token'] = tokenString;

    it('should fail with the key token does not exists on cache', () => {

        const removeTokenFromCache = new RemoveTokenFromCache(deleteItemFromCache, '@key');

        const response = removeTokenFromCache.execute();

        expect(response.isFailure).toBeTruthy();
    });

    it('should be able to remove the token from cache', () => {

        const removeTokenFromCache = new RemoveTokenFromCache(deleteItemFromCache, '@token');

        const response = removeTokenFromCache.execute();

        expect(response.isSuccess).toBeTruthy();
    });

});