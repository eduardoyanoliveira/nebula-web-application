import styled, { css } from "styled-components";

export const LabelContainer = styled.label`
    width: 200px;
    height: 200px;

    margin: 0 auto;

    ${({theme}) => css`

        background-color: ${theme.colors.background};

    `};

    border-radius: 50%;

    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    cursor: pointer;
`;

export const Input = styled.input`
    display: none;
`;

export const IconContainer = styled.span`

    z-index: 99;
    position: absolute;

    ${({theme}) => css`
        color: ${theme.colors.typography500};
    `};

    opacity: 0.8;

    transition: all 0.5s;

    &:hover{
        opacity: 1;
        transform: scale(1.2);
    }

`;

export const Preview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;