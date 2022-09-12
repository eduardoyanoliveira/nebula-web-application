import { MdOutlineModeEditOutline } from 'react-icons/md';
import { IconContainer } from '../common-styles';
import { EditContainer } from './styles';

interface IEditProps {
    margin?: string
};

function Edit({margin} : IEditProps) {
    return (
        <EditContainer margin={margin}>
            <IconContainer>
                <MdOutlineModeEditOutline />
            </IconContainer>
        </EditContainer>
    );
};

export default Edit;
