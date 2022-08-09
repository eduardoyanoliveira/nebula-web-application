import { cleanup, render, screen } from "@testing-library/react"
import FormContainer from "."
import ThemeProvider from "../../../styles/themeProvider";

describe('Form Container tests', () => {

    it('Should has a container div and title h1 with text "test', () => {
        render(
            <ThemeProvider>
                <FormContainer title="Test">
                    <h2>Hello world</h2>
                </FormContainer>
            </ThemeProvider>
        );

        const formContainer = screen.getByTestId('form-container');
        const formTitle = screen.getByTestId('form-container-title');
        const children = screen.getByRole('heading', { name: 'Hello world'});

        expect(formContainer).toBeInTheDocument();
        expect(formTitle).toBeInTheDocument();
        expect(children).toBeInTheDocument();
        
        cleanup();
    });
});