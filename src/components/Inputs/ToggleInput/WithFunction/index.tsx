import React, { useCallback } from "react";
import { useState } from "react";
import { CheckBoxInput, ToggleContainer, ToggleLabel } from "../styles";

interface IToggleInputProps {
    small?: boolean,
    margin?: string,
    initialValue?: boolean,
    onClick?(): void
};

const ToggleInputWithFunction: React.FC<IToggleInputProps> = ({ small, margin, onClick, initialValue = false }) => {

    const [toggle, setToggle] = useState<boolean>(initialValue);

    const handleClick = useCallback(() => {
        setToggle((prev) => prev = !prev);
        onClick && onClick();
    },[onClick])

    return (
        <ToggleContainer small={small} data-testid='toggle-container' margin={margin} onClick={handleClick}>
            <CheckBoxInput  
                data-testid="toggle-input"
                type="checkbox" 
                checked={toggle}
                onChange={handleClick}
            />
            <ToggleLabel small={small} data-testid="toggle-label"></ToggleLabel>
        </ToggleContainer>
    );
};

export default React.memo(ToggleInputWithFunction);