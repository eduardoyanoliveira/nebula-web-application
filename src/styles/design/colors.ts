import { ThemeColors } from "../styled";

const baseColors = {
    primary: '#E3516E',
    primaryGradient: 'linear-gradient(276.33deg,rgba(234, 111, 111, 0.96) -4.51%,rgba(187, 53, 141, 0.81) 98.2%)',
    primaryLightShadow: '2px 3px 5px rgba(227, 81, 110, 0.5)',
    secondary: '#279F7E',
    secondaryGradient: 'linear-gradient(93.66deg,#21886C.16%,#2B9B70 43.43%,#31D09B 93.14%)',
    secondaryLightShadow: '2px 3px 5px rgba(81, 227, 179, 0.5)'
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
    backgroundAltTwo: '#28272D',
    typography500: '#7C7C7D',
    typography200: 'rgb(72, 72, 72)',
    appShadow: '4px 0px 4px #000,-4px -4px 4px #000,0px 4px 4px #000',
};