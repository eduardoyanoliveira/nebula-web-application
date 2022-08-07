import React, { ReactNode } from 'react'
import { Container, Title } from './styles';

interface IFormContainerProps {
    title: string,
    children: ReactNode
};

const  FormContainer : React.FC<IFormContainerProps> = ({ title, children }) => {
    return (
        <Container data-testid="form-container">
            <Title data-testid="form-container-title">
                {title}:
            </Title>
            {children}
        </Container>
    );
};

export default FormContainer;