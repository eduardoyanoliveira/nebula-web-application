import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleInput from ".";
import ThemeProvider from '../../../styles/themeProvider';

describe('ToggleInput Tests', () => {

    const fn = jest.fn();

    const setUp = () => {
        render(
            <ThemeProvider>
                <ToggleInput id={'toggle-test'} getValue={fn} />
            </ThemeProvider>
        );
    };

    it('should be able to render all html elements', () => {

        setUp();

        const container = screen.getByTestId('toggle-container');
        const input = screen.getByTestId('toggle-input');
        const label = screen.getByTestId('toggle-label');
        
        expect(container).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(label).toBeInTheDocument();

        cleanup();
    });

    it('should render the label with the background-color #5A596B', () => {

        setUp();

        const label = screen.getByTestId('toggle-label');
        
        expect(label).toHaveStyle({
            backgroundColor: '#5A596B',
        });

        cleanup();
    });

    it('should change the label background-color and called the fn function once if the input is checked', () => {

        setUp();

        const input = screen.getByTestId('toggle-input');
        const label = screen.getByTestId('toggle-label');

        userEvent.click(input);
        
        expect(fn).toHaveBeenCalledTimes(1);
        expect(label).toHaveStyle({
            backgroundColor: '#E3516E',
        });

        cleanup();
    });

});