import { cleanup, render, renderHook, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { AutoCompleteComponent } from "."
import { IAutoCompleteData } from "../interfaces/autocomplete-data-interfaces";

const mockData : IAutoCompleteData[] = [
    {
        id: '1',
        name: 'john'
    },
    {
        id: '2',
        name: 'mary'
    },
    {
        id: '3',
        name: 'emmily'
    },
    {
        id: '4',
        name: 'ethan'
    },
];

describe('AutoComplete component test', () => {

    const setUp = () => {

        const getItem = jest.fn();
        const { result } = renderHook(() => AutoCompleteComponent({ data: mockData, fieldToDisplay: 'name', getItem }));

        render(
            <input 
                data-testid='autocomplete' 
                onChange={result.current.handleChange}
                onKeyDown={result.current.handleKeyDown}
            >
            </input>
        );

        return { result };
    };
    
    it('should be able to load the data passed in parameters', () => {

        const { result } = setUp();

        expect(result.current.currentData).toBe(mockData);

        cleanup();
    });

    it('current data should be filtered by the input value', () => {
  
        const { result } = setUp();

        const input = screen.getByTestId('autocomplete');
        
        userEvent.type(input, 'e');

        expect(result.current.currentData.length).toBe(2);

       cleanup();
    });

    it('open should be false if any data contains the input value  and currentData should be empty', () => {
  
        const { result } = setUp();

        const input = screen.getByTestId('autocomplete');
        
        userEvent.type(input, 'z');

        expect(result.current.currentData.length).toBe(0);
        expect(result.current.open).toBe(false);

       cleanup();
    });

    it('open should be true when something is typed on input and some data contains the input value', () => {
  
        const { result } = setUp();

        const input = screen.getByTestId('autocomplete');
        
        userEvent.type(input, 'e');

        expect(result.current.open).toBe(true);

       cleanup();
    });

    it('should capture the first value filtered if the input is focused and the user clicks Tab', () => {
  
        const { result } = setUp();

        const input = screen.getByTestId('autocomplete');
        
        userEvent.type(input, 'a');
        input.focus();
        userEvent.keyboard("{Tab}");

        expect(result.current.currentData[0].name).toBe('mary');

       cleanup();
    });

    it('should capture the first value filtered if the input is focused and the user clicks Enter', () => {
  
        const { result } = setUp();

        const input = screen.getByTestId('autocomplete');
        
        userEvent.type(input, 'a');
        input.focus();
        userEvent.keyboard("{Enter}");

        expect(result.current.currentData[0].name).toBe('mary');

       cleanup();
    });

});