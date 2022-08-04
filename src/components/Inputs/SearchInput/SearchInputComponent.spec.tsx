import { cleanup, render, screen } from "@testing-library/react";
import SearchInputComponent from ".";
import ThemeProvider from "../../../styles/themeProvider";


describe('Auto-complete ui component', () => {

    const setUp = () => {
        render(
            <ThemeProvider>
                <SearchInputComponent 
                    maxWidth={'300px'}
                    margin={'20px'}    
                />
            </ThemeProvider>
        );
    };

    it('should render all html elements', () => {
        setUp();

        const container = screen.getByTestId('search-input-container');
        const input = screen.getByTestId('search-input');
        const iconContainer = screen.getByTestId('search-input-icon-container');
        const icon = screen.getByTestId('search-input-icon');

        expect(container).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(iconContainer).toBeInTheDocument();
        expect(icon).toBeInTheDocument();

        cleanup();
    });

    // STYLES TESTS

    it('should have "300px" of maxWidth in the main-container', async () => {
        setUp();

        const container = screen.getByTestId('search-input-container');

        expect(container).toHaveStyle({
            maxWidth: '300px'
        });

        cleanup();
    });

    it('should have "20px" of margin in the main-container', async () => {
        setUp();

        const container = screen.getByTestId('search-input-container');

        expect(container).toHaveStyle({
            margin: '20px'
        });

        cleanup();
    });

});