import React, { InputHTMLAttributes } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Container, Icon, IconContainer, SearchInput } from './styles'


interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement>{
    maxWidth?: string,
    margin?: string,
};


const  SearchInputComponent : React.FC<ISearchInputProps> = ({ maxWidth, margin, ...rest }) => {

    return (
        <Container data-testid='search-input-container' maxWidth={maxWidth} margin={margin}>
            <SearchInput
                data-testid='search-input'
                placeholder='Pesquise'
                {...rest}
            />
            <IconContainer data-testid='search-input-icon-container'>
                <Icon data-testid='search-input-icon'>
                    <FaSearch/>
                </Icon>
            </IconContainer>
        </Container>
    );
};

export default SearchInputComponent;