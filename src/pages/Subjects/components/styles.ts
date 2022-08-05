import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../application/utils/screen/sizes";

export const SubjectsListContainer = styled.ul`
    margin-top: 45px;
    width: 100%;
`;

export const SubjectRow = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    height: 50px;
    width: 100%;
    border-radius: 5px;

    margin-bottom: 25px;
    padding: 0 30px;

    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};

    &:hover{
        ${({theme}) => css`
            box-shadow: ${theme.colors.appShadow} ;
        `};
    };

    cursor: pointer;
`;

export const SubjectTitle = styled.h3`

    margin-right: 20px;

    ${({theme}) => css`
        color: ${theme.colors.primary} ;
        
        ${theme.typographies.titleTwo};
    `};

    @media(min-width:${ScreenSizes.tablet}){
        margin-right: 50px;
    }; 
`;

export const RegisterLabel = styled.label`

    display: none;

    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleOne};
    `};

    
    @media(min-width:${ScreenSizes.tablet}){
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