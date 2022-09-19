import styled, { css } from "styled-components";
import { ScreenSizes } from "../../application/utils/screen/sizes";

interface IContainerProps {
    clickable?: boolean
}

export const Container = styled.div<IContainerProps>`

    width: 100%;
    min-height: 150px; // Changes to  min-height: 80px; when desktop
    height: auto;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 10px;


    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};


    @media(min-width:${ScreenSizes.lg}){
        padding: 10px 10px;
    };

    &:hover{
        ${({theme, clickable}) => css`
            ${clickable ? `box-shadow: ${theme.colors.baseShadow}` : ''};
            ${clickable ? `cursor: pointer` : ''};
        `};
    };

`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin-left: 35px; */
`;

export const UserContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 5px 0px;
`;

export const Username = styled.label`
    margin-left: 10px;


    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleTwo};
    `}

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;


export const RegisterDate = styled.label`
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleTwo};
    `}
    font-size: 12px;
    text-align: end;
    margin: 5px 0px;
`;


export const Subject = styled.h4`
    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.titleTwo};
    `}

    text-align: center;
    margin: 0 auto;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    max-width: 160px;
`;


export const Title = styled.p`
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleOne};
    `}

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    margin: 20px 0 0 0;
`;


export const Text = styled.p`
 ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleOne};
    `}

    padding: 0 40px;
    margin: 35px 0 0 0;
`;

// Answer

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;
