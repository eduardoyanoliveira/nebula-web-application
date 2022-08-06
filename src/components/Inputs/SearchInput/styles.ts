import styled, { css } from "styled-components";
import { Input } from "../Input/styles";

interface ContainerProps {
    maxWidth?: string,
    margin?: string
};


export const Container = styled.div<ContainerProps>`
    display: flex;
    border-radius: 5px;
    width: 100%;
    ${({ maxWidth, margin }) => css`
        max-width: ${maxWidth};
        margin: ${margin};
    `};
`;

export const SearchInput = styled(Input)`
    width: 80%;
    border-radius: 5px 0 0 5px;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    padding: 0 15px 0 0;
    width: 20%;
    border-radius: 0 5px 5px 0;
    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `}
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