import { InMemorySaveItemOnLocalStorage } from "../../../tests/Cache/in-memory-local-storage";
import { InMemoryPostAuthentication } from "../../../tests/HttpRequestClients/in-memory-post-authentication";
import { RemoteAuthentication } from "../../../useCases/Authentication/remote-authentication";
import { SignIn } from "../../../useCases/UserCredentials/sign-in";
import LoginComponent from "./login-component";

const httpPostClient = new InMemoryPostAuthentication();
const remoteAuthentication = new RemoteAuthentication('sessions', httpPostClient);
const saveItemInCache = new InMemorySaveItemOnLocalStorage();

httpPostClient.users.push({
    username: 'test',
    email: 'test@test.com',
    password: '123@abc'
});

const signIn = new SignIn(remoteAuthentication, saveItemInCache);

export const LoginPageMock = () => {
    
    const { handleChange, onSubmit } = LoginComponent(signIn);

    return(
        <div>
            <input
                name='email'
                placeholder="email"
                onChange={handleChange}
            />
            <input
                name='password'
                placeholder="password"
                onChange={handleChange} 
            />
            <button
                onClick={onSubmit} 
            >
                submit
            </button>
        </div>
    );
};
