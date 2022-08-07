import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SubjectsListAndFilter from '../../application/features/Subjects/components/subjects-list-and-filter';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import { ButtonColors } from '../../components/Buttons/Button/ButtonColors';
import IconButton from '../../components/Buttons/IconButton';
import FormContainer from '../../components/Form/Contianer';
import SearchInputComponent from '../../components/Inputs/SearchInput';
import SubjectsList from './components/SubjectsList';
import { Header } from './styles';

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);


function SubjectsPage() {

    const navigate = useNavigate();

    const { search, setSearch, isFetching, error, filteredSubjects } = SubjectsListAndFilter(httpAxiosGetClient);
    
    function handlePlusClick(){
        navigate('/subjects/register');
    };

    console.log(filteredSubjects)

    return (
        <FormContainer title='Tópicos'>
            <Header>
                <SearchInputComponent  
                    value={search || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    margin='0 25px 0 0'
                /> 
                <IconButton 
                    icon={<FaPlus/>} 
                    maxWidth={'50px'} 
                    backgroundColor={ButtonColors.primary}
                    onClick={handlePlusClick}
                />
            </Header>
            <SubjectsList subjects={filteredSubjects || []}/>
        </FormContainer>
    );
};

export default SubjectsPage;