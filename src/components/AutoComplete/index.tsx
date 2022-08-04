import { AutoCompleteComponent } from './components';
import { Container, AutoCompleteInput ,List, Item, AutoCompleteContainer, IconContainer, Icon } from "./styles";
import { FaSearch } from 'react-icons/fa';
import { IAutoCompleteData } from './interfaces/autocomplete-data-interfaces';

interface IAutoCompleteProps{
    name: string,
    maxWidth?: string,
    margin?: string,
    data: IAutoCompleteData[],
    getItem(item: IAutoCompleteData): void,
};


function AutoComplete({ name, maxWidth, margin, data, getItem }: IAutoCompleteProps) {

    const { 
        handleChange,
        handleClick,
        open, 
        handleKeyDown,
        inputValue,
        currentData,
        closeInput
    } = AutoCompleteComponent({data, getItem});

    
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
                                        id={String(item.id)} 
                                        key={item.id} 
                                        onClick={() => handleClick(item)}
                                    >
                                        {item.name}
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