import { cleanup, render, screen } from "@testing-library/react"
import FormDateLabel from "."
import ThemeProvider from "../../../styles/themeProvider"

describe('FormDateLabel tests', () => {

    it('Should render a label with p child', () => {

        render(
            <ThemeProvider>
                <FormDateLabel dateLabel="Register" date={new Date().toLocaleDateString('pt-BR')}/>
            </ThemeProvider>
        );

        const formDateLabel = screen.getByTestId('label');
        const p = screen.getByTestId('label-p');

        expect(formDateLabel).toBeInTheDocument();
        expect(p).toBeInTheDocument();

        expect(formDateLabel).toHaveStyle({
            marginRight: '20px',
        });
        
        cleanup();
    });
});