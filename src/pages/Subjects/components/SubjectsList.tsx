import { 
    SubjectsListContainer,
    SubjectRow,
    SubjectTitle,
    RegisterLabel, 
    RegisterDate, 
    EditIconContainer 
} from './styles';

import { ISubject } from '../../../application/Domain/Entities/ISubject';
import { MdOutlineEdit } from 'react-icons/md';

interface ISubjectsListprops {
    subjects: ISubject[]
};

const SubjectsList: React.FC<ISubjectsListprops> = ({ subjects }) => {
    return (
        <SubjectsListContainer>
            {
                subjects?.map((item) => {
                    const created_at = new Date((item.created_at as Date)).toLocaleString('pt-BR');
                    return (
                        <SubjectRow key={item.id} isActive={item.is_active}>
                            <SubjectTitle isActive={item.is_active}> 
                                {item.name} 
                            </SubjectTitle>
                            <RegisterLabel>
                                Cadastro:
                                <RegisterDate>
                                    {created_at}
                                </RegisterDate>
                            </RegisterLabel>
                            <EditIconContainer>
                                <MdOutlineEdit/>
                            </EditIconContainer>
                        </SubjectRow>
                    );
                })
            }
        </SubjectsListContainer>
    );
};

export default SubjectsList