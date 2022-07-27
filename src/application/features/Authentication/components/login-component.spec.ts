import userEvent from "@testing-library/user-event";
import { InMemorySaveItemOnLocalStorage } from "../../../tests/Cache/in-memory-local-storage";
import { InMemoryPostAuthentication } from "../../../tests/HttpRequestClients/in-memory-post-authentication";
import { RemoteAuthentication } from "../../../useCases/Authentication/remote-authentication";
import { SignIn } from "../../../useCases/UserCredentials/sign-in";
import LoginComponent from "./login-component";

describe('Login Component', () => {

    const httpPostClient = new InMemoryPostAuthentication();
    const remoteAuthentication = new RemoteAuthentication('sessions', httpPostClient);
    const saveItemInCache = new InMemorySaveItemOnLocalStorage();

    httpPostClient.users.push({
        username: 'test',
        email: 'test@test.com',
        password: '123@abc'
    });

    const signIn = new SignIn(remoteAuthentication, saveItemInCache);

    const { handleChange, onSubmit } = LoginComponent(signIn);
    let emailInput : HTMLInputElement;
    let passwordInput : HTMLInputElement;
    let submitButton : HTMLButtonElement;

    beforeAll(() => {

        emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = 'email';
        emailInput.value = '';
        emailInput.addEventListener('onChange', (e) => handleChange);
      

        passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.name = 'password';
        passwordInput.value = '';
        passwordInput.addEventListener('onChange', (e) => handleChange);
        

        submitButton = document.createElement('button');
        submitButton.addEventListener('onClick', (e) => onSubmit);
        
        document.body.appendChild(emailInput);
        document.body.appendChild(passwordInput);
        document.body.appendChild(submitButton);
    })

    it('should fail if the email is not registered on database', async () => {

        userEvent.type(emailInput, 'test@test.com');
        userEvent.type(passwordInput, 'SW@Master7');
        await userEvent.click(submitButton);

    });
    
});