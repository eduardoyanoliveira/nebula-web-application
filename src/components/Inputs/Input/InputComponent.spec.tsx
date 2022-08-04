import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputComponent from ".";
import ThemeProvider from "../../../styles/themeProvider";

describe('<InputComponent />', () => {
    
    const setUp =() => {
        render(
            <ThemeProvider>
                <InputComponent
                    label='test-label'
                    name='test-input'
                    maxWidth='200px'
                    margin='20px 20px'
                    placeholder="test-placeholder"
                />
            </ThemeProvider>
        );
    };

    it('should render an input container with only a child (input)', () => {
        render(
            <ThemeProvider>
                <InputComponent/>
            </ThemeProvider>
        );

        const inputContainer = screen.getByTestId('input-container-test-id');

        expect(inputContainer.childElementCount).toBe(1);

        cleanup();
    });

    it('should render an input container with two children (label and input)', () => {

        setUp();

        const inputContainer = screen.getByTestId('input-container-test-id');
        const label = screen.getByTestId('label-test-id');
        const input = screen.getByPlaceholderText('test-placeholder');

        expect(inputContainer.childElementCount).toBe(2);
        expect(label).toBeInTheDocument();
        expect(input).toBeInTheDocument();

        cleanup();
    });

    it('should render a input that changes its value when something is typed', () => {
        
        setUp();

        const input = screen.getByPlaceholderText('test-placeholder');

        userEvent.type(input, 'test-value');

        expect(screen.getByDisplayValue('test-value')).toBeInTheDocument();

        cleanup();
    });

    // STYLES TESTS

    it('should render a input container with 200px of maxWidth', ()=> {

        setUp();

        const inputContainer = screen.getByTestId('input-container-test-id');

        expect(inputContainer).toHaveStyle({
            maxWidth: '200px'
        });

        cleanup();
    });

    it('should render a input container with 20px 20px of margin', ()=> {

        setUp();

        const inputContainer = screen.getByTestId('input-container-test-id');

        expect(inputContainer).toHaveStyle({
            margin: '20px 20px'
        });

        cleanup();
    });
});