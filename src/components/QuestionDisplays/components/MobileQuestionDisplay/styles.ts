import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../../application/utils/screen/sizes";

export const Container = styled.div`

    width: 100%;
    height: 150px;
    padding: 10px 20px;
    margin-bottom: 20px;
    position: relative;

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

    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 15px;

    width: fit-content;
    height: fit-content;

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
    margin: 35px 0 0 0;
`;
