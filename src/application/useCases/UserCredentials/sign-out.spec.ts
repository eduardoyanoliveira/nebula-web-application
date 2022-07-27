import { InMemorySaveItemOnLocalStorage, InMemoryDeleteItemFromLocalStorage } from "../../tests/Cache/in-memory-local-storage";
import { InMemoryPostAuthentication } from "../../tests/HttpRequestClients/in-memory-post-authentication";
import { RemoteAuthentication } from "../Authentication/remote-authentication";
import { SignIn } from "./sign-in";
import { SignOut } from "./sign-out";

describe('Sign Out', () => {

    const httpPostClient = new InMemoryPostAuthentication();
    const remoteAuthentication = new RemoteAuthentication('sessions', httpPostClient);
    const saveItemInCache = new InMemorySaveItemOnLocalStorage();

    const signIn = new SignIn(remoteAuthentication, saveItemInCache);

    const deleteItemFromCache = new InMemoryDeleteItemFromLocalStorage();
    const signOut = new SignOut(deleteItemFromCache);

    httpPostClient.users.push({
        username: 'test',
        email: 'test@test.com',
        password: '123@abc'
    });


   
    it('should fail with the user and token is not on cache', async () => {

        const response = await signOut.execute();

        expect(response.isFailure).toBeTruthy();

    });

    it('should be able to delete user and token from the cache', async () => {

        await signIn.execute({ email: 'test@test.com', password: '123@abc' });

        const response = await signOut.execute();

        expect(response.isSuccess).toBeTruthy();
    });

});