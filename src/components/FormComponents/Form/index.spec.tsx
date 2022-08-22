import { cleanup, render, screen } from "@testing-library/react"
import Form from "."
import ThemeProvider from "../../../styles/themeProvider";

describe('Form tests', () => {

    it('Should has a container div and title h1 with text "test', () => {
        render(
            <ThemeProvider>
                <Form title="Test">
                    <h2>Hello world</h2>
                </Form>
            </ThemeProvider>
        );

        const formContainer = screen.getByTestId('form');
        const formTitle = screen.getByTestId('form-title');
        const children = screen.getByRole('heading', { name: 'Hello world'});

        expect(formContainer).toBeInTheDocument();
        expect(formTitle).toBeInTheDocument();
        expect(children).toBeInTheDocument();
        
        cleanup();
    });
});