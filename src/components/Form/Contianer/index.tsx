import React, { ReactNode } from 'react'
import { Container, Title } from './styles';

interface IFormContainerProps {
    title: string,
    children: ReactNode
};

function FormContainer({ title, children } : IFormContainerProps) {
    return (
        <Container>
            <Title>
                {title}:
            </Title>
            {children}
        </Container>
    );
};

export default FormContainer;