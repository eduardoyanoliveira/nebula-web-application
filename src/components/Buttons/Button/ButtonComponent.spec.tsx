import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeProvider from '../../../styles/themeProvider';
import { ButtonColors } from './ButtonColors';
import ButtonComponent from './index';

describe('<ButtonComponent />', () => {

    const fn = jest.fn();

    const setUp = () => {

        render(
            <ThemeProvider>
                <ButtonComponent
                    text='test-text'
                    backgroundColor={ButtonColors.primaryGradient}
                    maxWidth='200px'
                    margin='20px 20px'
                    onClick={fn}
                />
            </ThemeProvider>
        );
    };

    it('should render a button with the text "test-text by" the props', () => {

        setUp();
        
        const button = screen.getByRole('button', { name: 'test-text' });

        expect(button).toBeInTheDocument();

        cleanup();
    });


    it('should execute the fn function when the button is clicked', () => {
        
        setUp();

        const button = screen.getByRole('button', { name: 'test-text' });

        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    // STYLES TESTS

    it('should render a button with the backgroundImage with the value of the primaryGradient from the theme', () => {
        
        setUp();

        const button = screen.getByRole('button', { name: 'test-text' });

        expect(button).toHaveStyle({
            backgroundImage: 'linear-gradient(276.33deg, rgba(224, 84, 84, 0.77) -4.51%, rgba(187, 69, 147, 0.81) 98.2%)'
        });
    });

    it('should render a button with the maxWidth of "200px" by the props', () => {
        
        setUp();

        const button = screen.getByRole('button', { name: 'test-text' });

        expect(button).toHaveStyle({
            maxWidth: '200px'
        });
    });

    it('should render a button with the margin of "20px 20px" by the props', () => {
        
        setUp();

        const button = screen.getByRole('button', { name: 'test-text' });

        expect(button).toHaveStyle({
            margin: '20px 20px'
        });
    });

});