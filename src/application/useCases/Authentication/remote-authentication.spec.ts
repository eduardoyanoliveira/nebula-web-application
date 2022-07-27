import { InMemoryPostAuthentication } from "../../tests/HttpRequestClients/in-memory-post-authentication";
import { RemoteAuthentication } from "./remote-authentication";

describe('Remote Authentication tests', () => {

    const httpPostClient = new InMemoryPostAuthentication();

    const remoteAuthentication = new RemoteAuthentication('sessions', httpPostClient);

    httpPostClient.users.push({
        username: 'test',
        email: 'test@test.com',
        password: '123@abc'
    });

    it('should fail with the email is wrong', async () => {
        const response  = await remoteAuthentication.authenticate(
            'super@super.com',
            '123@abc'
        );

        expect(response.isFailure).toBeTruthy();
    });

    
    it('should fail with the password is wrong', async () => {
        const response  = await remoteAuthentication.authenticate(
            'test@test.com',
            '123@ABC'
        );

        expect(response.isFailure).toBeTruthy();
    });

    it('should be able to authenticate the user', async () => {
        const response  = await remoteAuthentication.authenticate(
            'test@test.com',
            '123@abc'
        );


        expect(response.isSuccess).toBeTruthy();
    });
}); 