import styled from "styled-components";
import { ScreenSizes } from "../../application/utils/screen/sizes";

export const Container = styled.div`
    display: none;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 80px;
    border-radius: 0 10px 0 0;
    padding: 0 30px;

    @media(min-width:${ScreenSizes.xl}){
        display: flex;
    }; 
`;
