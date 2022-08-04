import styled, { css } from "styled-components";
import { Input } from "../../Inputs/Input/styles";

interface ContainerProps {
    maxWidth?: string,
    margin?: string
};

interface IAutoCompleteContainerProps{
    borderRadius?: string, 
}; 

export const Container = styled.div<ContainerProps>`
    position: relative;
    width: 100%;

    ${({ maxWidth, margin }) => css`
        max-width: ${maxWidth};
        margin: ${margin};
    `};

`;

export const AutoCompleteContainer = styled.div`
    display: flex;
`;

export const AutoCompleteInput = styled(Input)<IAutoCompleteContainerProps>`
    width: 80%;

    ${({ borderRadius }) => css`
        border-radius: ${borderRadius};
    `};
`;

export const IconContainer = styled.div<IAutoCompleteContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;

    ${({ borderRadius }) => css`
        border-radius: ${borderRadius};
    `};

    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `}
    
    cursor: pointer;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 4px;

    color: #fff;

    ${({theme}) => css`
        background-color: ${theme.colors.primary};
        box-shadow: ${theme.colors.primaryLightShadow};
    `}
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