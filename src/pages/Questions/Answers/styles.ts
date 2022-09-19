import styled, { css } from 'styled-components';
import { ScreenSizes } from '../../../application/utils/screen/sizes';


export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    width: 100%;
    padding: 0 30px;
    margin: 30px 0;

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

export const Container = styled(MainContainer)`
    margin: 0;
    padding: 0;
`; 

export const Title = styled.h2`
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