import styled, { css } from "styled-components";


export const BackgroundContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    
    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};

`;

export const AppPage = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;


    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
    `};

    @media(min-width: 800px) {
        height: 98vh;
        width: 98vw;
        border-radius: 15px;

        ${({theme}) => css`
            box-shadow:  ${theme.colors.appShadow};
        `};
    };

`;