import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'; 
import { ScreenSizes } from "../../../application/utils/screen/sizes";


export const Container = styled.div`

    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 290px;
    border-radius: 15px 0 0 15px;
    padding: 0;

    transition: left ease-in-out .25s;
 
    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};

`;

export const Header  = styled.h2`

    display: flex;
    height: 150px;
    align-items: center;
    padding: 0 0 0 40px;

    font-size: 36px;
    font-family: 'Paduak', sans-serif;
    font-weight: bold;
    line-height: 20px;

    ${({theme}) => css`
        background-image: ${theme.colors.primaryGradient};
    `};

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media(min-width: ${ScreenSizes.desktop} ){
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