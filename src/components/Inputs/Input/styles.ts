import styled, { css } from "styled-components";

interface InputContainerProps{
    margin?: string,
    maxWidth?: string,
}

interface LabelProps {
    htmlFor: string
}


export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({margin, maxWidth}) => css`
        margin: ${margin};
        max-width: ${maxWidth};
    `}
`;

export const Label = styled.label<LabelProps>`
    margin-bottom: 5px;
    margin-left: 15px;
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleOne};
    `}

`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    text-indent: 15px;

    color: ${props => props.theme.colors.primary};

    ${({theme}) => css`
        background-color: ${theme.colors.background};
        ${theme.typographies.titleTwo};
    `}

    &::placeholder { 
        ${({theme}) => css`
            color: ${theme.colors.typography200};
        `}
    }

`;