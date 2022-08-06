import { Typographies } from "../styled";

export const typographies : Typographies = {
    body: {
        fontSize: '1.125rem',
        letterSpacing: '0',
        lineHeight: '30px',
        fontWeight: 600,
    },
    titleOne: {
        // fontSize: '1.5rem',
        fontSize: 'clamp(0.85rem, 12vw + 0.25rem, 1.65rem)',
        letterSpacing: '0',
        lineHeight: '25px',
        fontWeight: 600,
    },
    titleTwo: {
        fontSize: '1.25rem',
        letterSpacing: '0',
        lineHeight: '20px',
        fontWeight: 600,
    },
    subtitleOne: {
        fontSize: '1rem',
        letterSpacing: '0',
        lineHeight: '20px',
        fontWeight: 600,
    },
    subtitleTwo: {
        fontSize: '.875rem',
        letterSpacing: '0',
        lineHeight: '20px',
        fontWeight: 600,
    },
    button: {
        fontSize: '1.438rem',
        letterSpacing: '1px',
        lineHeight: '20px',
        fontWeight: 500,
    },
};