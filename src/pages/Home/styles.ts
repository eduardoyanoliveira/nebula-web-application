import styled, { css } from "styled-components";
import { ScreenSizes } from "../../application/utils/screen/sizes";

interface IQuestionContainerProps {
    screenOverflow?: boolean
};

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0 30px;

    @media(min-width:${ScreenSizes.sm}){
        padding: 0 50px;
    };


    @media(min-width:${ScreenSizes.md}){
        padding: 0 80px;
        border-radius: 0 0 10px 10px;
    }; 

    
    @media(min-width:${ScreenSizes.lg}){
        padding: 0 220px;
    };

    @media(min-width:${ScreenSizes.xl}){
        padding: 0 220px;
    }; 
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 30px 0 ;
    ${({theme}) => css`
        color: ${theme.colors.typography500};
        ${theme.typographies.titleOne}
    `}

    @media(min-width:${ScreenSizes.xl}){
        width: 100%;
    }; 
`;

export const QuestionsContainer = styled.div<IQuestionContainerProps>`
    height: 680px;
    width: 100%;
    width: ${({screenOverflow}) => screenOverflow ? '98%' : '100%'};
    overflow-y: auto;


    @media(min-width:${ScreenSizes.md}){
        height: 600px;
    }; 

    ${({theme}) => css`
        scrollbar-color: ${theme.colors.typography200} ${theme.colors.backgroundAltTwo};
        scrollbar-width: thin;
    `}

    &::-webkit-scrollbar {
        width: 4px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {

        ${({theme}) => css`
            background: ${theme.colors.typography200};
        `}
        -webkit-border-radius: 2px;
        border-radius: 2px;
    }
    
    /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: 0;
    }
`;