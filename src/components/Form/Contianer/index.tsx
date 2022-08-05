import React, { ReactNode } from 'react'
import { Container, Title } from './styles';

interface IFormContainerProps {
    title: string,
    children: ReactNode
};

const  FormContainer : React.FC<IFormContainerProps> = ({ title, children }) => {
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