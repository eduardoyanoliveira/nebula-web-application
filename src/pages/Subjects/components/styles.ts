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

    position: relative;

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

    width: 80px;

    ${({theme}) => css`
        color: ${theme.colors.primary} ;
        ${theme.typographies.titleTwo};
    `};

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media(min-width:${ScreenSizes.md}){
        width: 80px;
        margin-right: 20px;
    }; 
    @media(min-width:${ScreenSizes.xl}){
        margin-right: 50px;
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

export const IsActiveContainer = styled.div`

    display: none;
    align-items: center;
    margin-left: 20px;

    @media(min-width:${ScreenSizes.sm}){
        display: flex;
    }; 

    @media(min-width:${ScreenSizes.md}){
        margin-left: 30px;
    }; 

    @media(min-width:${ScreenSizes.xl}){
        margin-left: 50px;
    }; 

`;

export const IsActiveLabel = styled.label`

    margin-right: 20px;

    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleOne};
    `};

`;


export const ExitIconContainer = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    font-size: 25px;
    right: 90px;;

    ${({theme}) => css`
        color: ${theme.colors.typography500};
    `};

    &:hover{
        ${({theme}) => css`
            color: ${theme.colors.primary} ;
        `};
    };

    @media(min-width:${ScreenSizes.md}){
        right: 60px;
    }; 

    @media(min-width:${ScreenSizes.xl}){
        right: 70px;
    }; 
`;

export const EditIconContainer = styled(ExitIconContainer)`
    right: 30px;

    @media(min-width:${ScreenSizes.md}){
        right: 20px;
    }; 

    @media(min-width:${ScreenSizes.xl}){
        right: 20px;
    }; 
`;