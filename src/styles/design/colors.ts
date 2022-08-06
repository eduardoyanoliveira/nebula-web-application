import { ThemeColors } from "../styled";

const baseColors = {
    primary: '#E3516E',
    primaryGradient: 'linear-gradient(276.33deg,rgba(234, 111, 111, 0.96) -4.51%,rgba(187, 53, 141, 0.81) 98.2%)',
    primaryLightShadow: '4px 4px 5px rgba(227, 81, 110, 0.5)',
    secondary: '#5E73BE',
    secondaryGradient: 'linear-gradient(93.66deg, #6667AB 7.16%, #5E73BE 43.43%, #5B80F0 93.14%)',
};


export const lightColors : ThemeColors = {
    ...baseColors,
    background: '#fff',
    backgroundAlt : '#F4F4F4',
    backgroundAltTwo: '#F9F9F9',
    typography500: '#5A596B',
    typography200: '#B9B9C1',
    appShadow: '4px 0px 4px #DBDBDB,-4px -4px 4px #DBDBDB,0px 4px 4px #DBDBDB',
};


export const darkColors : ThemeColors = {
    ...baseColors,
    background: '#17191D',
    backgroundAlt : '#1D1E22',
    backgroundAltTwo: '#28272DB3',
    typography500: '#7C7C7D',
    typography200: 'rgba(209, 209, 219, 0.5)',
    appShadow: '4px 0px 4px #000,-4px -4px 4px #000,0px 4px 4px #000',
};