import styled, { css } from "styled-components";
import { Input } from "../Input/styles";

interface ContainerProps {
    maxWidth?: string,
};

interface IAutoCompleteInputProps{
    borderRadius?: string, 
}; 


export const Container = styled.div<ContainerProps>`
    position: relative;
    width: 100%;

    ${({ maxWidth }) => css`
        max-width: ${maxWidth};
    `};

`;

export const AutoCompleteInput = styled(Input)<IAutoCompleteInputProps>`
    ${({ borderRadius }) => css`
        border-radius: ${borderRadius};
    `};
`;

export const List = styled.ul`
    position: absolute;
    width: 100%;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 0 25px;
    list-style: none;
    height: 40px;
    width: 100%;

    ${({theme}) => css`
    background-color: ${theme.colors.backgroundAlt};
        color: ${theme.colors.typography200};
    `};

    cursor: pointer;

    &:hover{
        ${({theme}) => css`
            background-color: ${theme.colors.background};
            color: ${theme.colors.primary};
        `};
    }

    &:last-child{
        border-radius: 0 0 5px 5px;
    }
`;