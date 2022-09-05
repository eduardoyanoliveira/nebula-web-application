import { AutoCompleteComponent } from './features';
import { 
    MainContainer, 
    Container, 
    AutoCompleteInput,
    List, 
    Item, 
    AutoCompleteContainer, 
    IconContainer, 
    Icon, 
    Label 
} from "./styles";
import { FaSearch } from 'react-icons/fa';

interface IAutoCompleteProps<T>{
    name: string,
    label?: string,
    initialValue?: string,
    maxWidth?: string,
    margin?: string,
    data: T[],
    fieldToDisplay: string,
    displayIcon?: boolean,
    placeholder?: string,
    getItem(item: T): void,
};


function AutoComplete<T>({ 
    name,
    label,
    initialValue = '',
    maxWidth, 
    margin, 
    data, 
    fieldToDisplay, 
    displayIcon = true,
    placeholder,
    getItem,
}: IAutoCompleteProps<T>) {

    const { 
        handleChange,
        handleClick,
        open, 
        handleKeyDown,
        inputValue,
        currentData,
    } = AutoCompleteComponent({data, fieldToDisplay, getItem});

    const autoCompleteBorder = displayIcon ? '5px 0 0 5px' : '5px 5x 0 5px';
    
    return (
        <MainContainer data-testid={'main-container-test-id'} margin={margin} maxWidth={maxWidth}>
            {
                (label && name) && (
                    <Label data-testid='label-test-id' htmlFor={name}>{label}:</Label>
                )
            }
            <Container data-testid='auto-complete-main-container'>
                <AutoCompleteContainer data-testid='auto-complete-container'>
                    <AutoCompleteInput 
                        name={name} 
                        // if the input value is empty and a initial value was recived on props and the reason of the input value to be empty is not cause the user cleaned it
                        value={!inputValue && initialValue && !open ? initialValue : inputValue} 
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        borderRadius={(open && inputValue) ? '5px 0 0 0' : autoCompleteBorder}
                        data-testid='auto-complete-input'
                        placeholder={placeholder || 'Pesquise'}
                        displayIcon={displayIcon}
                        
                    />
                    {
                        displayIcon && (
                            <IconContainer 
                            data-testid='auto-complete-icon-container'
                            borderRadius={(open && inputValue) ? '0 5px 0 0' : '0 5px 5px 0'}
                            >
                                <Icon  data-testid='auto-complete-icon'>
                                    <FaSearch/>
                                </Icon>
                            </IconContainer>
                        )
                    }
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
                                            {(item as any)[fieldToDisplay]}
                                        </Item>
                                    )
                                })
                            }
                        </List>
                    )
                }
            </Container>
        </MainContainer>
    );
};

export default AutoComplete;