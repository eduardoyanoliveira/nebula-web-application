import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../../application/utils/screen/sizes";

export const Container = styled.div`

    width: 100%;
    min-height: 150px;
    height: auto;
    padding: 10px 20px;
    margin-bottom: 20px;

    ${({theme}) => css`
        background-color: ${theme.colors.background};
    `};

    border-radius: 10px;

    @media(min-width:${ScreenSizes.lg}){
        padding: 10px 10px;
    };

    &:hover{
        ${({theme}) => css`
            box-shadow: ${theme.colors.baseShadow};
        `};
    };

    cursor: pointer;
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const UserContainer = styled.div`
    display: flex;
    justify-content: flex-start;
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
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Subject = styled.h4`
    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.titleTwo};
    `}

    margin: auto auto;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    max-width: 160px;
`;

export const QuestionTitle = styled.p`
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