import styled, { css } from "styled-components";


export const CheckBoxInput = styled.input`
    visibility: hidden;
`;

export const ToggleContainer = styled.div`

    position: relative;
    height: 12px;
    width: 40px;
    border-radius: 30px;

    ${({theme}) => css`
        background-color: ${theme.colors.typography200};
    `}

`;

export const ToggleLabel = styled.label`

display: inline-block;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    position: relative;
    top: -6px;
    left: -24px;
    transition: transform ease-in-out .3s;
    cursor: pointer;

    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `}
    
    ${CheckBoxInput}:checked + & {
       
        ${({theme}) => css`
            transform: translateX(37px);
            background-color: ${theme.colors.primary};
        `} 
    }
`;

