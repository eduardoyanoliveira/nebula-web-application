import React, { ReactNode } from 'react'
import { Container, Title } from './styles';

interface IFormProps {
    title: string,
    hasImages?: boolean,
    children: ReactNode
};

const  Form : React.FC<IFormProps> = ({ title, hasImages, children }) => {
    return (
        <Container 
            data-testid="form" 
            encType={hasImages ? 'multipart/form-data' : 'application/x-www-form-urlencoded'}
        >
            <Title data-testid="form-title">
                {title}:
            </Title>
            {children}
        </Container>
    );
};

export default Form;