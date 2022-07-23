import { ThemeColors } from "../styled";

const baseColors = {
    primary: '#E3516E',
    primaryGradient: 'linear-gradient(276.33deg, rgba(224, 84, 84, 0.77) -4.51%, rgba(187, 69, 147, 0.81) 98.2%)',
    secondary: '#5E73BE',
    secondaryGradient: 'linear-gradient(93.66deg, #6667AB 7.16%, #5E73BE 43.43%, #5B80F0 93.14%)',
};


export const lightColors : ThemeColors = {
    ...baseColors,
    background: '#fff',
    backgroundAlt : '#F4F4F4',
    typography500: '#5A596B',
    typography200: 'rgba(57, 58, 72, 0.55)'
};


export const darkColors : ThemeColors = {
    ...baseColors,
    background: '#17191D',
    backgroundAlt : '#1D1E22',
    typography500: '#7C7C7D',
    typography200: 'rgba(209, 209, 219, 0.5)'
};