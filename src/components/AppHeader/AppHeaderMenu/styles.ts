import styled, { css } from "styled-components";


export const HeaderMenu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
`; 

export const Logout = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
margin-left: 15px;

${({theme}) => css`
    color: ${theme.colors.typography500};
`};

&:hover {
    ${({theme}) => css`
        color: ${theme.colors.primary};
    `};
};

cursor: pointer;
`;