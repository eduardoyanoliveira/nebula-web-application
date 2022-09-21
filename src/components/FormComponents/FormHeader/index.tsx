import React, { ReactNode } from 'react';
import { Header } from './styles';

interface FormHeaderProps {
    children: ReactNode
};

const  FormHeader : React.FC<FormHeaderProps> = ({ children }) => {
  return (
    <Header>
      {children}
    </Header>
  );
};

export default FormHeader;