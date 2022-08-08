import styled, { css } from "styled-components";

export const Header = styled.div`
    display: flex;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 25px 0 0 0;
`;

export const RegisterLabel = styled.span`
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleTwo}
    `};
`;

export const IsActiveContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const IsActiveLabel = styled.label`
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.titleTwo}
    `};
    margin-right: 20px;
`;