import 'styled-components';

export interface ThemeColors {
    primary: string,
    primaryGradient: string,
    secondary: string,
    secondaryGradient: string,
    background: string,
    backgroundAlt: string,
    typography200: string,
    typography500: string
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