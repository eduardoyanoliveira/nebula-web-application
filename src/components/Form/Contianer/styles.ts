import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../application/utils/screen/sizes";

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 80px);
    width: 100%;
    padding: 0 30px;


    @media(min-width:${ScreenSizes.tablet}){
        padding: 0 150px;
        border-radius: 0 0 10px 10px;
        height: calc(98vh - 80px);
    }; 

    @media(min-width:${ScreenSizes.desktop}){
        padding: 0 205px;
        border-radius: 0 0 10px 0;
    }; 
`;

export const Title = styled.h1`

    margin: 30px 0 ;
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.titleOne}
    `}

    @media(min-width:${ScreenSizes.desktop}){
        padding: 0 205px;
        width: calc(100% - 290px);
    }; 
`;