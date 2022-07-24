import { Result } from "../../core/Result";
import { IUserCredentialsProps } from "../../Domain/Authentication/IAuthentication";
import { InMemoryRemoteAuthentication } from "../../tests/Authentication/in-memory-remote-authentication";
import { RemoteAuthentication } from "./remote-authentication";

describe('Remote Authentication tests', () => {

    const HTTPPostClient = new InMemoryRemoteAuthentication();

    const remoteAuthentication = new RemoteAuthentication('/sessions', HTTPPostClient);

    HTTPPostClient.url = '/sessions'

    HTTPPostClient.users.push({
        username: 'test',
        email: 'test@test.com',
        password: '123@abc'
    });

    it('should fail with the email is wrong', async () => {
        const response : Result<IUserCredentialsProps> = await remoteAuthentication.authenticate(
            'super@super.com',
            '123@abc'
        );

        expect(response.isFailure).toBeTruthy();
    });

    
    it('should fail with the password is wrong', async () => {
        const response : Result<IUserCredentialsProps> = await remoteAuthentication.authenticate(
            'test@test.com',
            '123@ABC'
        );

        expect(response.isFailure).toBeTruthy();
    });

    it('should be able to authenticate the user', async () => {
        const response : Result<IUserCredentialsProps> = await remoteAuthentication.authenticate(
            'test@test.com',
            '123@abc'
        );

        expect(response.isSuccess).toBeTruthy();
        expect(response.getValue().token).toBeTruthy();
    });
}); 