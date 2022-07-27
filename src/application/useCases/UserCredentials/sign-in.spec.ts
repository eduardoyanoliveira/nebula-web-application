import { InMemorySaveItemOnLocalStorage, inMemoryLocalStorage } from "../../tests/Cache/in-memory-local-storage";
import { InMemoryPostAuthentication } from "../../tests/HttpRequestClients/in-memory-post-authentication";
import { RemoteAuthentication } from "../Authentication/remote-authentication";
import { SignIn } from "./sign-in";

describe('Sign in', () => {

    const httpPostClient = new InMemoryPostAuthentication();
    const remoteAuthentication = new RemoteAuthentication('sessions', httpPostClient);
    const saveItemInCache = new InMemorySaveItemOnLocalStorage();

    httpPostClient.users.push({
        username: 'test',
        email: 'test@test.com',
        password: '123@abc'
    });


    const signIn = new SignIn(remoteAuthentication, saveItemInCache);

    it('should be able to save user credentials and the token on cache', async () => {

        const response = await signIn.execute({ email: 'test@test.com', password: '123@abc' });

        expect(response.isSuccess).toBeTruthy();
        expect((inMemoryLocalStorage as any)['@token']).toBeTruthy();
        expect((inMemoryLocalStorage as any)['@user']).toBeTruthy();
    });

});