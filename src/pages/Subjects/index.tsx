import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ISubject } from '../../application/Domain/Entities/ISubject';
import useFilter from '../../application/CommonHooks/useFilter';
import { httpAxiosGetClient } from '../../application/Infra/axios';
import { ButtonColors } from '../../components/Buttons/Button/ButtonColors';
import IconButton from '../../components/Buttons/IconButton';
import FormContainer from '../../components/FormComponents/Form';
import SearchInputComponent from '../../components/Inputs/SearchInput';
import SubjectsList from './components/SubjectsList';
import { Header } from './styles';



function SubjectsPage() {

    const navigate = useNavigate();

    const { 
        search, 
        setSearch, 
        isFetching, 
        error, 
        filteredData 
    } = useFilter<ISubject>(
        httpAxiosGetClient,
        'name',
        'subjects'
    );
    
    function handlePlusClick(){
        navigate('/subjects/register');
    };

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
            <SubjectsList subjects={filteredData || []}/>
        </FormContainer>
    );
};

export default SubjectsPage;