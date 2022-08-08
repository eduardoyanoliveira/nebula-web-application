import React from "react";
import { useEffect, useRef, useState } from "react";
import { CheckBoxInput, ToggleContainer, ToggleLabel } from "./styles";

interface IToggleInputProps {
    id?: string,
    small?: boolean,
    initialValue?: boolean,
    getValue?(value: boolean): void
};

const ToggleInput: React.FC<IToggleInputProps> = ({ id, small, initialValue, getValue }) => {

    const [toggle, setToggle] = useState<boolean>(!!initialValue);

    const isMounted = useRef(true);

    useEffect(() => {
        if(isMounted.current){
            setToggle((prev) => prev = !!initialValue);
        }
    },[initialValue]);

    const handleToggle = (e :  React.ChangeEvent<HTMLInputElement> ) => {
        setToggle((prev) => prev = !prev);
        getValue && getValue(e.target.checked);
    };
    
    return (
        <ToggleContainer small={small} data-testid='toggle-container'>
            <CheckBoxInput  
                data-testid="toggle-input"
                type="checkbox" 
                checked={toggle}
                id={id} onChange={(e) => handleToggle(e)}
            />
            <ToggleLabel small={small} data-testid="toggle-label" htmlFor={id}></ToggleLabel>
        </ToggleContainer>
    );
};

export default React.memo(ToggleInput);