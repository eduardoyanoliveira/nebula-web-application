import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'; 
import { ScreenSizes } from "../../../application/utils/screen/sizes";


export const Container = styled.div`

    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 290px;
    padding: 0;

    z-index: 999;

    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};

    @media(min-width: ${ScreenSizes.md} ){
        height: 98vh;
        border-radius: 10px 0 0 10px;
    };

    @media(min-width: ${ScreenSizes.xl} ){
        position: unset;
        border-radius: 10px 0 0 10px;
    };

`;

export const Header  = styled.div`

    display: flex;
    height: 150px;
    align-items: center;
    padding: 0 0 0 40px;

    ${({theme}) => css`
        background-image: ${theme.colors.primaryGradient};
    `};

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media(min-width: ${ScreenSizes.xl} ){
        padding: 0 0 0 60px;
    };

`;

export const MenuContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 40px;

`;

export const MenuItem = styled.li`

    width: 80%;
    height: 45px;
    margin-bottom: 15px;

    text-decoration: none;
    list-style: none;

`;

export const MenuHomeButton = styled(Link)`

    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    padding: 0 20px;

    border-radius: 10px;
    color: #fff;
    ${({theme}) => css`
        ${theme.typographies.body};
        background-image: ${theme.colors.primaryGradient};
    `};
    

    &:hover{
        cursor: pointer;

    }
`;

export const MenuLink = styled(Link)`

    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 20px;

    ${({theme}) => css`
        color: ${theme.colors.typography500} ;
    `};

    &:hover{
        cursor: pointer;

        ${({theme}) => css`
            color: ${theme.colors.primary};
        `};
    }
`;

export const MenuItemIcon = styled.div`
    display: flex;
    margin-right: 10px;
    font-size: 22px;
`;

export const MenuItemText = styled.label`

    ${({theme}) => css`
        ${theme.typographies.body};
    `};

    &:hover{
        cursor: pointer;
    }
`;