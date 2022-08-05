import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ISubject } from '../../application/Domain/Entities/ISubject';
import { useStaleWhileRevalidate } from '../../application/hooks/useStaleWhileRevalidate';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import { ButtonColors } from '../../components/Buttons/Button/ButtonColors';
import IconButton from '../../components/Buttons/IconButton';
import FormContainer from '../../components/Form/Contianer';
import SearchInputComponent from '../../components/Inputs/SearchInput';
import { Header } from './styles';

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);


function SubjectsPage() {

    const navigate = useNavigate();

    const { data: subjectData, isFetching, error } = useStaleWhileRevalidate<ISubject[]>('subjects', httpAxiosGetClient, 30);

    function handlePlusClick(){
        navigate('/subjects/register');
    };

    return (
        <FormContainer title='Tópicos'>
            <Header>
                <SearchInputComponent  margin='0 25px 0 0'/> 
                <IconButton 
                    icon={<FaPlus/>} 
                    maxWidth={'50px'} 
                    backgroundColor={ButtonColors.primary}
                    onClick={handlePlusClick}
                />
            </Header>
            {
                subjectData?.map((item) => {
                    return <h3 key={item.id}>{item.name}</h3>
                })
            }
        </FormContainer>
    );
};

export default SubjectsPage;