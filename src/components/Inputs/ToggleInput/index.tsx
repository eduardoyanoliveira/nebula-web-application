import { CheckBoxInput, ToggleContainer, ToggleLabel } from "./styles";

interface IToggleInputProps {
    id?: string,
    small?: boolean,
    initialValue?: boolean,
    getValue?(value: boolean): void
};

const ToggleInput: React.FC<IToggleInputProps> = ({ id, small, initialValue, getValue }) => {

    const handleToggle = (e :  React.ChangeEvent<HTMLInputElement> ) => {
       getValue && getValue(e.target.checked)
    };

    return (
        <ToggleContainer small={small} data-testid='toggle-container'>
            <CheckBoxInput  
                data-testid="toggle-input"
                type="checkbox" 
                checked={initialValue}
                id={id} onChange={(e) => handleToggle(e)}
            />
            <ToggleLabel small={small} data-testid="toggle-label" htmlFor={id}></ToggleLabel>
        </ToggleContainer>
    );
};

export default ToggleInput;