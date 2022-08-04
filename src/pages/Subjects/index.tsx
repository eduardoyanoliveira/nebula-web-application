import React from 'react'
import SearchInputComponent from '../../components/Inputs/SearchInput';
import { Container } from './styles';

function SubjectsPage() {
    return (
        <Container>
            <SearchInputComponent maxWidth='350px' margin='40px'/>
        </Container>
    );
};

export default SubjectsPage;