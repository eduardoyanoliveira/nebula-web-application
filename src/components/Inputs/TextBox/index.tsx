import { TextareaHTMLAttributes } from "react";
import { InputContainer, Label, TextInput } from "./styles";

interface TextBoxProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label?: string,
    maxWidth?: string,
    margin?: string,
}

/**
 * Creates an input component
 * @param label If informed creates a label above the input
 * @param maxWidth if informed, the value will be placed as the max-width of the input
 * @param margin If informed creates a margin on Input Container
 * @param allProps inherit all InputProps from react input element
 */
const TextBox: React.FC<TextBoxProps> = ({margin, maxWidth , label, ...rest}) => {

    return (
        <InputContainer data-testid={'input-container-test-id'} margin={margin} maxWidth={maxWidth}>
            {
                (label && rest.name) && (
                    <Label data-testid='label-test-id' htmlFor={rest.name}>{label}:</Label>
                )
            }
            <TextInput 
                {...rest}
            />
        </InputContainer>
    );
};

export default TextBox;