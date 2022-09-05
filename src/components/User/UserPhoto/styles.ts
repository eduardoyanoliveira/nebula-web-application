import styled, { css } from "styled-components";

interface IPhotoProps {
    size?: string
}

export const Photo = styled.img<IPhotoProps>`
   
    border-radius: 50%;
    object-fit: cover;

    ${({size}) => css`
    
        width: ${ size ? size : '50px'};
        height: ${ size ? size : '50px'};
    `};
`;