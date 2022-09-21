import { cleanup, render, screen } from "@testing-library/react"
import FormContainer from "."

describe('FormContainer tests', () => {

    it('Should render a div with HTML children', () => {

        render(
            <FormContainer>
                <h1>test</h1>
            </FormContainer>
        );

        const formContainer = screen.getByTestId('form-container');
        const children = screen.getByRole('heading', { name: 'test'});

        expect(formContainer).toBeInTheDocument();
        expect(children).toBeInTheDocument();
        
        cleanup();
    });

    it('Should be able to render the component with the styles passed by props', () => {

        render(
            <FormContainer margin="20px" padding="30px" justifyContent="center">
                <h1>test</h1>
            </FormContainer>
        );

        const formContainer = screen.getByTestId('form-container');

        expect(formContainer).toHaveStyle({
            margin: '20px',
            padding: '30px',
            justifyContent: 'center'
        });

        cleanup();
    });
});