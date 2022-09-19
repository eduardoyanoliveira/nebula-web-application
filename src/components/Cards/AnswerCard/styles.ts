import styled from "styled-components";
import { Container, Text } from '../common-styles';

interface ICommonProps {
    isDesktop: boolean
};

// Desktop Styled Components

export const AnswerContainer = styled(Container)<ICommonProps>`
    min-height: 150px;
    ${({ isDesktop }) => isDesktop && 'min-height: 80px;' };
`;

export const AnswerText = styled(Text)<ICommonProps>`
    ${({ isDesktop }) => isDesktop && 'padding: 0 90px;' };
    margin-top: 5px;
    ${({ isDesktop }) => !isDesktop && 'margin-top: 10px;' };
`;

