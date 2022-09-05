import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../../application/utils/screen/sizes";

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
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

export const UserContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 20%;
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

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Subject = styled.h4`
    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.titleTwo};
    `}

    text-align: center;
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
`;

export const RegisterDate = styled.label`
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.subtitleTwo};
    `}
    font-size: 12px;
    width: 25%;
    text-align: end;
`;