import { SubjectsListContainer, SubjectRow, SubjectTitle, RegisterLabel, RegisterDate } from './styles';
import { ISubject } from '../../../application/Domain/Entities/ISubject';

interface ISubjectsListprops {
    subjects: ISubject[]
};

const SubjectsList: React.FC<ISubjectsListprops> = ({ subjects }) => {
    return (
        <SubjectsListContainer>
            {
                subjects?.map((item) => {
                    return (
                        <SubjectRow key={item.id}>
                            <SubjectTitle> 
                                {item.name} 
                            </SubjectTitle>
                            <RegisterLabel>
                                Cadastro:
                                <RegisterDate>
                                    {(item.created_at as Date).toLocaleString('pt-BR')}
                                </RegisterDate>
                            </RegisterLabel>
                        </SubjectRow>
                    );
                })
            }
        </SubjectsListContainer>
    );
};

export default SubjectsList