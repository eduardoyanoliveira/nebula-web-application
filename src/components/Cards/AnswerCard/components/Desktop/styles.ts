import styled, { css } from "styled-components";
import { Container, Text } from '../../../common-styles';

export const DesktopContainer = styled(Container)`
    min-height: 80px;
`;

export const DesktopText = styled(Text)`
    padding: 0 90px;
    margin: 0;
`;

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
