import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AutoComplete from ".";
import ThemeProvider from "../../styles/themeProvider";
import { IAutoCompleteData } from "./interfaces/autocomplete-data-interfaces";

const mockData : IAutoCompleteData[] = [
    {
        id: '1',
        name: 'Brazil'
    },
    {
        id: '2',
        name: 'Germany'
    },  
    {
        id: '3',
        name: 'Japan'
    },
];

describe('Auto-complete ui component', () => {

    const fn = jest.fn();

    const setUp = () => {
        render(
            <ThemeProvider>
                <AutoComplete 
                    name="test-ac" 
                    data={mockData}
                    fieldToDisplay='name' 
                    getItem={fn}
                    maxWidth={'300px'}
                    margin={'20px'}    
                />
            </ThemeProvider>
        );
    };

    it('should render all html elements besides the auto-complete list', () => {
        setUp();

        const mainContainer = screen.getByTestId('auto-complete-main-container');
        const container = screen.getByTestId('auto-complete-container');
        const input = screen.getByTestId('auto-complete-input');
        const iconContainer = screen.getByTestId('auto-complete-icon-container');
        const icon = screen.getByTestId('auto-complete-icon');
        const list = screen.queryByTestId('auto-complete-list');

        expect(mainContainer).toBeInTheDocument();
        expect(container).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(iconContainer).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
        expect(list).not.toBeInTheDocument();

        cleanup();
    });

    it('should render the list with something is typed on input', async () => {
        setUp();

        const input = screen.getByTestId('auto-complete-input') as HTMLInputElement;

        await userEvent.type(input, 'Bra');

        const list = screen.getByTestId('auto-complete-list');

        expect(list).toBeInTheDocument();

        cleanup();
    });


    // STYLES TESTS

    it('should have "300px" of maxWidth in the main-container', async () => {
        setUp();

        const mainContainer = screen.getByTestId('main-container-test-id');

        expect(mainContainer).toHaveStyle({
            maxWidth: '300px'
        });

        cleanup();
    });

    it('should have "20px" of margin in the main-container', async () => {
        setUp();

        const mainContainer = screen.getByTestId('main-container-test-id');

        expect(mainContainer).toHaveStyle({
            margin: '20px'
        });

        cleanup();
    });

});