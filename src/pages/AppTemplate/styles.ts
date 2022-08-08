import styled, { css } from "styled-components";
import { ScreenSizes } from "../../application/utils/screen/sizes";


export const BackgroundContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    
    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};

`;

export const App = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
    `};

    @media(min-width: ${ScreenSizes.md}) {
        height: 98vh;
        width: 98vw;
        border-radius: 15px;

        ${({theme}) => css`
            box-shadow:  ${theme.colors.appShadow};
        `};
    };

    @media(max-width:${ScreenSizes.xl}){
        flex-direction: column ;
    };

`;

export const AppCenterContainer = styled.div`
    width: 100%;
    border-radius: 10px 10px 0 0;

`;

export const AppHeader = styled.div`
    display: none;
    width: 100%;
    height: 80px;
    border-radius: 0 10px 0 0;

    
    @media(min-width:${ScreenSizes.xl}){
        display: block;
    }; 
`;