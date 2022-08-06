import styled, { css } from "styled-components";

interface IToggleProps{
    small?: boolean
};

export const CheckBoxInput = styled.input`
    visibility: hidden;
`;

export const ToggleContainer = styled.div<IToggleProps>`

    position: relative;

    height: ${({small}) => small ? '9px' : '12px'};
    width: ${({small}) => small ? '30px' : '40px'};

    border-radius: 30px;

    ${({theme}) => css`
        background-color: ${theme.colors.typography200};
    `}

`;

export const ToggleLabel = styled.label<IToggleProps>`

display: inline-block;

    width: ${({small}) => small ? '20px' : '25px'};
    height: ${({small}) => small ? '20px' : '25px'};
    position: relative;
    top: ${({small}) => small ? '-26px' : '-6px'};
    left: ${({small}) => small ? '-9px' : '-24px'};
    border-radius: 50%;
    
    transition: transform ease-in-out .3s;
    cursor: pointer;

    ${({theme}) => css`
        background-color: ${theme.colors.typography500};
    `}
    
    ${CheckBoxInput}:checked + & {
       
        ${({theme, small}) => css`
            transform: ${ small ? 'translateX(28px)' : 'translateX(37px)'};
            background-color: ${theme.colors.primary};
        `} 
    }
`;

