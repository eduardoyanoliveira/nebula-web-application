import { AutoCompleteComponent } from './components';
import { Container, AutoCompleteInput ,List, Item, AutoCompleteContainer, IconContainer, Icon } from "./styles";
import { FaSearch } from 'react-icons/fa';

interface IAutoCompleteProps<T>{
    name: string,
    maxWidth?: string,
    margin?: string,
    data: T[],
    fieldToDisplay: string,
    getItem(item: T): void,
};


function AutoComplete<T>({ name, maxWidth, margin, data, fieldToDisplay, getItem }: IAutoCompleteProps<T>) {

    const { 
        handleChange,
        handleClick,
        open, 
        handleKeyDown,
        inputValue,
        currentData,
        closeInput
    } = AutoCompleteComponent({data, fieldToDisplay, getItem});

    
    return (
        <Container data-testid='auto-complete-main-container' maxWidth={maxWidth} margin={margin} >
            <AutoCompleteContainer data-testid='auto-complete-container'>
                <AutoCompleteInput 
                    name={name} 
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    borderRadius={(open && inputValue) ? '5px 0 0 0' : '5px 0 0 5px'}
                    data-testid='auto-complete-input'
                    
                />
                <IconContainer 
                    data-testid='auto-complete-icon-container'
                    onClick={closeInput}
                    borderRadius={(open && inputValue) ? '0 5px 0 0' : '0 5px 5px 0'}
                >
                    <Icon  data-testid='auto-complete-icon'>
                        <FaSearch/>
                    </Icon>
                </IconContainer>
            </AutoCompleteContainer>
            {
                (open && inputValue) && (
                    <List  data-testid='auto-complete-list' >
                        {
                            currentData.map((item) =>{
                                return (
                                    <Item 
                                        id={String((item as any).id)} 
                                        key={(item as any).id} 
                                        onClick={() => handleClick(item)}
                                    >
                                        {(item as any).name}
                                    </Item>
                                )
                            })
                        }
                    </List>
                )
            }
        </Container>
    );
};

export default AutoComplete;