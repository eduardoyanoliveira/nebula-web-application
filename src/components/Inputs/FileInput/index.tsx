import { ChangeEvent } from 'react';
import { FiUpload } from 'react-icons/fi';
import { LabelContainer, Input, IconContainer, Preview } from './styles';

interface FileInputProps {
    alt?: string,
    url: string | undefined,
    handleChange(e: ChangeEvent<HTMLInputElement>): void,
};

function FileInput({ alt, url, handleChange } : FileInputProps) {

    return (
        <LabelContainer>
            <IconContainer>
                <FiUpload size={25}/>
            </IconContainer>
            <Input 
                type={"file"} 
                accept="image/png, image/jpeg" 
                onChange={handleChange}
            />
            {
                url && (
                    <Preview src={url} alt={alt} />
                )
            }
        </LabelContainer>
    );
};

export default FileInput;