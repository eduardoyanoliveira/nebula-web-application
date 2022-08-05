import { CheckBoxInput, ToggleContainer, ToggleLabel } from "./styles";

interface IToggleInputProps {
    id: string,
    initialValue?: boolean,
    getValue(value: boolean): void
};

const ToggleInput: React.FC<IToggleInputProps> = ({ id, initialValue, getValue }) => {

    const handleToggle = (e :  React.ChangeEvent<HTMLInputElement> ) => {
        getValue(e.target.checked)
    };

    return (
        <ToggleContainer data-testid='toggle-container'>
            <CheckBoxInput  
                data-testid="toggle-input"
                type="checkbox" 
                checked={initialValue} 
                id={id} onChange={(e) => handleToggle(e)}
            />
            <ToggleLabel data-testid="toggle-label" htmlFor={id}></ToggleLabel>
        </ToggleContainer>
    );
};

export default ToggleInput;