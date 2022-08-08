import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../application/utils/screen/sizes";
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
    width: 25%;

    ${({ borderRadius }) => css`
        border-radius: ${borderRadius};
    `};

    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};

    @media(min-width: ${ScreenSizes.sm}){
        justify-content: flex-end;
        padding-right: 25px;
        width: 20%;
    };
    
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
    `}
`;

export const List = styled.ul`
    position: absolute;
    width: 100%;
    height: 120px;
    overflow-y: auto;
    z-index: 999;


    ${({theme}) => css`
        scrollbar-color: ${theme.colors.typography200} ${theme.colors.backgroundAltTwo};
        scrollbar-width: thin;
    `}

    &::-webkit-scrollbar {
        width: 4px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {

        ${({theme}) => css`
            background: ${theme.colors.typography200};
        `}
        -webkit-border-radius: 2px;
        border-radius: 2px;
    }
    
    /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: 0;
    }

`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 0 25px;
    list-style: none;
    height: 40px;
    width: 100%;

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAltTwo};
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleOne};
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