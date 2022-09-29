import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import { CheckBoxInput, ToggleContainer, ToggleLabel } from "./styles";

interface IToggleInputProps {
    id?: string,
    small?: boolean,
    initialValue?: boolean,
    margin?: string,
    getValue?(value: boolean): void,
};

const ToggleInput: React.FC<IToggleInputProps> = ({ id, small, initialValue, margin, getValue }) => {

    const [toggle, setToggle] = useState<boolean>(!!initialValue);

    const isMounted = useRef(true);

    useEffect(() => {
        if(isMounted.current){
            setToggle((prev) => prev = !!initialValue);
        };
    },[initialValue]);

    const handleToggle = useCallback((e :  React.ChangeEvent<HTMLInputElement> ) => {
        setToggle((prev) => prev = !prev);
        getValue && getValue(e.target.checked);
    },[getValue]);
    
    return (
        <ToggleContainer small={small} data-testid='toggle-container' margin={margin}>
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