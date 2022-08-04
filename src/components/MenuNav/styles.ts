import styled, { css } from "styled-components";
import { ScreenSizes } from "../../application/utils/screen/sizes";


export const Container = styled.nav`

    display: flex;
    align-items: center;
    position: relative;
    height: 80px;
    width: 100%;
    background-color: red;
    border-radius: 0;
    padding: 0 30px;

    @media(min-width: ${ScreenSizes.tablet}){
        border-radius: 15px 15px 0 0;
    };

    @media(min-width: ${ScreenSizes.desktop}){
        display: block;
        height: 100%;
        width: 290px;
        border-radius: 15px 0 0 15px;
        padding: 0;
        position: unset;
    };

    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};
    
`;

export const MenuBarsContainer = styled.div`
    font-size: 30px;
    cursor: pointer;

    ${({theme}) => css`
        color: ${theme.colors.typography200};
    `}; 

    &:hover{
        ${({theme}) => css`
            color: ${theme.colors.primary};
        `}; 
    }

    @media(min-width: ${ScreenSizes.desktop}){
        display: none;
    };
`;
