import userEvent from "@testing-library/user-event";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { LoginPageMock } from "./test-login-page";
import { inMemoryLocalStorage } from "../../../tests/Cache/in-memory-local-storage";

describe('Login Component', () => {

    const setUp = () => {

        render(
            <LoginPageMock/>
        );

    };

    it('should fail if the email is not registered on database', async () => {

        setUp();

        const emailInput = screen.getByPlaceholderText('email');
        const passwordInput = screen.getByPlaceholderText('password');
        const submit = screen.getByRole('button', { name: 'submit'} );

        userEvent.type(emailInput, 'super@super.com');
        userEvent.type(passwordInput, '123@abc');
        await userEvent.click(submit);
        
        await waitFor( () => expect((inMemoryLocalStorage as any)['@token']).toBeFalsy());

        cleanup();

    });
    
    it('should fail if the password isincorrect', async () => {

        setUp();

        const emailInput = screen.getByPlaceholderText('email');
        const passwordInput = screen.getByPlaceholderText('password');
        const submit = screen.getByRole('button', { name: 'submit'} );

        userEvent.type(emailInput, 'test@test.com');
        userEvent.type(passwordInput, '123@abcfsag');
        await userEvent.click(submit);
        
        await waitFor( () => expect((inMemoryLocalStorage as any)['@token']).toBeFalsy());

        cleanup();

    });

    it('should be albe to log the user in the app', async () => {

        setUp();

        const emailInput = screen.getByPlaceholderText('email');
        const passwordInput = screen.getByPlaceholderText('password');
        const submit = screen.getByRole('button', { name: 'submit'} );

        userEvent.type(emailInput, 'test@test.com');
        userEvent.type(passwordInput, '123@abc');
        await userEvent.click(submit);
        
        await waitFor( () => expect((inMemoryLocalStorage as any)['@token']).toBeTruthy());

        cleanup();

    });
});