import styled, { css } from 'styled-components';

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

    margin: 50px 0;
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

interface IToggle {
    isToggled: boolean
};

export const Toggle = styled.div<IToggle>`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;

    ${({theme, isToggled}) => css`
        background-color: ${isToggled ? theme.colors.primary : theme.colors.typography200};
        color: #FFF;
    `};

    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    
`;