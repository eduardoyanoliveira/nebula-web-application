import { SubjectsListContainer, SubjectRow, SubjectTitle, RegisterLabel, RegisterDate, IsActiveContainer, IsActiveLabel, ExitIconContainer, EditIconContainer } from './styles';
import { ISubject } from '../../../application/Domain/Entities/ISubject';
import ToggleInput from '../../../components/Inputs/ToggleInput';
import { IoMdExit } from 'react-icons/io';
import { MdOutlineEdit } from 'react-icons/md';

interface ISubjectsListprops {
    subjects: ISubject[]
};

const SubjectsList: React.FC<ISubjectsListprops> = ({ subjects }) => {
    return (
        <SubjectsListContainer>
            {
                subjects?.map((item) => {
                    const created_at = new Date((item.created_at as Date)).toLocaleString('pt-BR')
                    return (
                        <SubjectRow key={item.id}>
                            <SubjectTitle> 
                                {item.name} 
                            </SubjectTitle>
                            <RegisterLabel>
                                Cadastro:
                                <RegisterDate>
                                    {created_at}
                                </RegisterDate>
                            </RegisterLabel>
                            <IsActiveContainer>
                                <IsActiveLabel>
                                    Ativo? 
                                </IsActiveLabel>
                                <ToggleInput initialValue={item.is_active} small={true}/>
                            </IsActiveContainer>
                                <ExitIconContainer>
                                    <IoMdExit/>
                                </ExitIconContainer>
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