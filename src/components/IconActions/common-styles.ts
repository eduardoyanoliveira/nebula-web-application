import styled, { css } from "styled-components";

interface IContainerProps {
    margin?: string
};

export const Container = styled.div<IContainerProps>`
    width: 65px;
    height: auto;

    padding: 0 2.5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    
    ${({margin}) => css`
        margin: ${margin}
    `};

`;

export const IconContainer = styled.span`

    font-size: 25px;

    ${({theme}) => css`
        color: ${theme.colors.typography500}
    `};

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: all ease-in-out .2s;

    &:hover {
        ${({theme}) => css`
            color: ${theme.colors.primary}
        `};
        transform: scale(1.1);
    }

    cursor: pointer;
`;

export const CountCircle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFF;

    ${({theme}) => css`
        background-color: ${theme.colors.primary};
        ${theme.typographies.subtitleOne};
    `};
`;