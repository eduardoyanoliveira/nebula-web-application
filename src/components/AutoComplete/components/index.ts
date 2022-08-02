import { useEffect, useState } from "react";
import { listObjectContains } from "../dataFunctions/listObjectContains";
import { IAutoCompleteData } from "../interfaces/autocomplete-data-interfaces";


interface IAutoCompleteComponentProps{
    data: IAutoCompleteData[],
    getItem(item: IAutoCompleteData): void,
};

function AutoCompleteComponent({ data, getItem } : IAutoCompleteComponentProps){

    const [inputValue, setInputValue] = useState('');

    // Stores the data filtered according with the current input value.
    const [currentData, setCurrentData] = useState<IAutoCompleteData[]>([]);

    // If true displays the list of current options on screen.
    const [open, setOpen] = useState(false);

    // Loads the data to the currentData state when the component mounts.
    useEffect(() => {
        setCurrentData((prev) => prev = data);
    },[data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

        setInputValue(e.target.value);

        setOpen(true);

        setCurrentData(listObjectContains('name', e.target.value, data));

        // If any data matches the input value , it takes list off the screen.
        listObjectContains('name', e.target.value, currentData).length === 0  && setOpen(false);
    };

    // When the user makes the last interection on the input , it checks if there is a object matching the current input value
    const closeInput = (): void => {
        const current : IAutoCompleteData[] = listObjectContains('name', inputValue, data);

        if(current.length > 0){
            const item : IAutoCompleteData = current[0];

            getItem(item);
            setInputValue(String(item.name));
            setOpen(false);
        };
    };

    const handleKeyDown = (event : React.KeyboardEvent<HTMLInputElement>):void => {
        if(event.key === 'Enter' || event.key === 'Tab'){
            closeInput();
        };
    };

    const handleClick = (item: IAutoCompleteData): void => {

        // Takes the selected object to the componet's father.
        getItem(item);

        // Sets the inputValue with the objected selected.
        setInputValue(String(item.name));

        // take list off the screen.
        setOpen(false);
    };
    
    return { handleChange, handleKeyDown, open, handleClick, inputValue, currentData, closeInput };
};

export { AutoCompleteComponent };