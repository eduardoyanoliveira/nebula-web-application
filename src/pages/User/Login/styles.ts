import styled, { css } from "styled-components";

interface FormProps {
    width: string
}

interface ScreenProps {
    size: string;
};

type DefaultScreenCss = {
    height: string;
};

const resetScreenCss = {
    height: 'calc(100vh)',
};

// Reset the container css if the dimenssion matches smartphone size  
const handleScreenSize = (size: string) : DefaultScreenCss | string => {
    switch (size) {
        case 'xs':
            return resetScreenCss;
        case 'sm':
            return  resetScreenCss;
        default:
            return ''
    };
};


const handleFormWidth = (width: string) : string => {
    switch (width) {
        case 'xs':
            return '90%';
        case 'sm':
            return '90%';
        case 'md':
            return '530px';
        default:
            return '710px';
    }
}

export const Screen = styled.main<ScreenProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    ${props => handleScreenSize(props.size)}

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
    `}
    
`;

export const FormContainer = styled.form<FormProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;

    height: 510px;
    border-radius: 20px;

    ${({theme, width}) => css`
        width: ${handleFormWidth(width)};
    `}
    
`;

export const Title = styled.h3`
    text-align: center;
    margin-bottom: 55px;

    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.titleOne};
    `}
`;