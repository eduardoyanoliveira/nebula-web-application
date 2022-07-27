import { IUserCredentialsProps } from "../../Domain/UserCredentials/IGetUserCredentials";
import { InMemorySaveItemOnLocalStorage, InMemoryGetItemFromLocalStorage } from "../../tests/Cache/in-memory-local-storage";
import { InMemoryPostAuthentication } from "../../tests/HttpRequestClients/in-memory-post-authentication";
import { RemoteAuthentication } from "../Authentication/remote-authentication";
import { GetUserCredentials } from "./get-user-credentials";
import { SignIn } from "./sign-in";

describe('Get user credentials', () => {

    const httpPostClient = new InMemoryPostAuthentication();
    const remoteAuthentication = new RemoteAuthentication('sessions', httpPostClient);
    const saveItemInCache = new InMemorySaveItemOnLocalStorage();

    const signIn = new SignIn(remoteAuthentication, saveItemInCache);


    const getItemFromCache = new InMemoryGetItemFromLocalStorage<IUserCredentialsProps>();
    const getUserCredentials = new GetUserCredentials(getItemFromCache);

    httpPostClient.users.push({
        username: 'test',
        email: 'test@test.com',
        password: '123@abc'
    });

    it('should fail with the user is not on cache', () => {

        const response = getUserCredentials.execute();

        expect(response.isFailure).toBeTruthy();

    });

    it('should be able to get user credentials from the cache', async () => {

        await signIn.execute({ email: 'test@test.com', password: '123@abc' });

        const response = getUserCredentials.execute();

        expect(response.isSuccess).toBeTruthy();
        expect(response.getValue().email).toBeTruthy();
    });

});