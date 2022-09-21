import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import FormToggle from "."
import ThemeProvider from "../../../styles/themeProvider"

describe('FormToggle tests', () => {

    const fn = jest.fn()

    it('Should render a label followed by toggle input inside a div with margin of 20px', () => {

        render(
            <ThemeProvider>
                <FormToggle 
                    toggleLabel="Active" 
                    getValue={fn} 
                    id='test-fake-id'
                    margin="20px"
                />
            </ThemeProvider>
        );

        const container = screen.getByTestId('container');
        const label = screen.getByText('Active');
        const toggle = screen.getByTestId('toggle-container');

        userEvent.click(toggle);

        expect(container).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        expect(toggle).toBeInTheDocument();

        expect(fn).toBeCalledTimes(1);

        expect(container).toHaveStyle({
            margin: '20px',
        });
        
        cleanup();
    });
});