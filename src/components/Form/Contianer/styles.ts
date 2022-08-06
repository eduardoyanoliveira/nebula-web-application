import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../application/utils/screen/sizes";

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 80px);
    width: 100%;
    padding: 0 30px;


    @media(min-width:${ScreenSizes.sm}){
        padding: 0 50px;
    };


    @media(min-width:${ScreenSizes.md}){
        padding: 0 80px;
        border-radius: 0 0 10px 10px;
        height: calc(98vh - 80px);
    }; 

    
    @media(min-width:${ScreenSizes.lg}){
        padding: 0 220px;
    };

    @media(min-width:${ScreenSizes.xl}){
        padding: 0 200px;
    }; 
`;

export const Title = styled.h1`

    margin: 30px 0 ;
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.titleOne}
    `}

    @media(min-width:${ScreenSizes.xl}){
        padding: 0 205px;
        width: 100%;
    }; 
`;