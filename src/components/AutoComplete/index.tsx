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
        <Container maxWidth={maxWidth} margin={margin} >
            <AutoCompleteContainer >
                <AutoCompleteInput 
                    name={name} 
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    borderRadius={(open && inputValue) ? '5px 0 0 0' : '5px 0 0 5px'}
                    
                />
                <IconContainer 
                    onClick={closeInput}
                    borderRadius={(open && inputValue) ? '0 5px 0 0' : '0 5px 5px 0'}
                >
                    <Icon>
                        <FaSearch/>
                    </Icon>
                </IconContainer>
            </AutoCompleteContainer>
            {
                (open && inputValue) && (
                    <List>
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