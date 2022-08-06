import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../application/utils/screen/sizes";

interface IElementProps {
    isActive: boolean
};

export const SubjectsListContainer = styled.ul`
    margin-top: 45px;
    width: 100%;
`;

export const SubjectRow = styled.li<IElementProps>`
    display: flex;
    align-items: center;
    list-style: none;
    height: 50px;
    width: 100%;
    border-radius: 5px;

    margin-bottom: 25px;
    padding: 0 1.5rem;

    position: relative;

    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};

    &:hover{
        ${({theme, isActive}) => css`
            box-shadow: ${isActive ? theme.colors.appShadow : ''};
        `};
    };

    cursor: ${({isActive}) => (isActive ? `pointer`: '')};
`;

export const SubjectTitle = styled.h3<IElementProps>`

    width: 170px;

    ${({theme, isActive}) => css`
        color: ${isActive ? theme.colors.primary : theme.colors.typography200};
        ${theme.typographies.titleTwo};
    `};

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media(min-width:${ScreenSizes.sm}){
        width: 250px;
        margin-right: 1.25rem;
    }; 

    @media(min-width:${ScreenSizes.xl}){
        margin-right: 1.5rem;
    }; 
`;

export const RegisterLabel = styled.label`

    display: none;

    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleTwo};
    `};

    
    @media(min-width:${ScreenSizes.md}){
        display: block;
    }; 
`;

export const RegisterDate = styled.span`
    margin-left: 20px;
    ${({theme}) => css`
        color: ${theme.colors.typography200};
        ${theme.typographies.subtitleTwo};
    `};
`;

export const EditIconContainer = styled.label`
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1.75rem;
    right: 40px;;

    ${({theme}) => css`
        color: ${theme.colors.typography200};
    `};

    &:hover{
        ${({theme}) => css`
            color: ${theme.colors.primary} ;
        `};
    };

    @media(min-width:${ScreenSizes.md}){
        right: 30px;
    }; 

    cursor: pointer;
`;
