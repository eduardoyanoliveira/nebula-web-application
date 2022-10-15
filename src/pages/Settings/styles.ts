import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


export const MainContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Title = styled.h1`
    text-align: center;
    ${({theme}) => css`
        ${theme.typographies.titleOne};
        color: ${theme.colors.typography500};
    `};

    margin: 30px 0 0 0;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
`;

export const Label = styled.span`

    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleOne};
    `};

    margin-right: 30px;
`;
