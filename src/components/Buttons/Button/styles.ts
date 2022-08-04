import styled, { css, DefaultTheme}  from "styled-components";

interface ButtonProps {
    backgroundColor: string,
    margin?: string,
    maxWidth?: string,
};

const handleBackgroundColor = (theme : DefaultTheme, backgroundColor : string) : string =>{
    
    switch (backgroundColor) {
        case 'primaryGradient':
            return theme.colors.primaryGradient
        case 'secondaryGradient':
            return theme.colors.secondaryGradient
        case 'primary':
            return theme.colors.primary
        case 'secondary':
            return theme.colors.secondary
        default:
            return theme.colors.primaryGradient
    };
};


export const Button = styled.button<ButtonProps>`

    outline: none;
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    color: #fff;
    
    ${({theme, maxWidth, margin, backgroundColor}) => css`
        background-image: ${handleBackgroundColor(theme, backgroundColor)};
        background-color: ${handleBackgroundColor(theme, backgroundColor)};
        box-shadow: ${theme.colors.primaryLightShadow};
        margin: ${margin};
        max-width: ${maxWidth};
        ${theme.typographies.button};
    `};

`;