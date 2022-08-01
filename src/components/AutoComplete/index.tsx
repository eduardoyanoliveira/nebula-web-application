import { AutoCompleteComponent, IAutoCompleteData } from './component';
import { Container, AutoCompleteInput ,List, Item } from "./styles";


interface IAutoCompleteProps{
    name: string,
    maxWidth?: string,
    data: IAutoCompleteData[],
    getItem(item: IAutoCompleteData): void,
};


function AutoComplete({ name, maxWidth, data, getItem }: IAutoCompleteProps) {

    const { 
        handleChange,
        handleClick,
        open, 
        handleKeyDown,
        inputValue,
        currentData 
    } = AutoCompleteComponent({data, getItem});

    
    return (
        <Container maxWidth={maxWidth} >
            <AutoCompleteInput 
                name={name} 
                borderRadius={(open && inputValue) ? '5px 5px 0 0' : '5px'}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
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