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
    /* border-radius: 10px 10px 0 0; */
    overflow-y: hidden;
    /* padding: 0 0 30px 0; */
    /* height: calc(100vh - 140px); */
    height: calc(100% - 80px);



    ${({theme}) => css`
        scrollbar-color: ${theme.colors.typography200} ${theme.colors.backgroundAltTwo};
        scrollbar-width: thin;
    `}

    @media(min-width:${ScreenSizes.md}){
        border-radius: 0 0 10px 0;
        /* height: calc(98vh - 140px); */
    }; 

    @media(min-width:${ScreenSizes.xl}){
        height: 100%;
        /* height: calc(98vh - 140px); */
    }; 

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

export const Content = styled.main`

    overflow-y: auto;
    height: 100%;

    @media(min-width:${ScreenSizes.xl}){
        height: calc(100% - 80px);
    }; 
        
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