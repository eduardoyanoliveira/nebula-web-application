import 'styled-components';

export interface ThemeColors {
    primary: string,
    primaryGradient: string,
    primaryLightShadow: string,
    secondary: string,
    secondaryGradient: string,
    secondaryLightShadow: string,
    background: string,
    backgroundAlt: string,
    backgroundAltTwo: string,
    typography200: string,
    typography500: string,
    baseShadow: string,
    appShadow: string,
}

type Font = {
    fontSize: string;
    letterSpacing: string;
    lineHeight: string;
    fontWeight: number | string;
}

export interface Typographies{
    body: Font,
    titleOne : Font,
    titleTwo: Font,
    subtitleOne: Font,
    subtitleTwo: Font,
    button: Font
};


declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: ThemeColors,
        typographies : Typographies
    }
}