import { IQuestion } from '../../../../../application/Domain/Entities/IQuestion';
import UserPhoto from '../../../../User/UserPhoto';
import { useNavigate } from 'react-router-dom';

import { 
    MobileContainer
} from './styles';

import { 
    TopContainer,
    MiddleContainer,
    UserContainer,
    Username,
    Title,
    Subject,
    RegisterDate,
} from '../../../common-styles';


interface IMobileQuestionItemCardProps {
    question: IQuestion
};

function MobileQuestionItemCard({ question } : IMobileQuestionItemCardProps ) {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Clicou')
        navigate('/answers/' + question.id)
    }

    return (
        <MobileContainer clickable onClick={handleClick} >
            <TopContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={question.author?.photo as string} 
                        alt={question.author?.username as string}
                        size={'45px'}
                    />
                    <Username> {question.author?.username as string} </Username>
                </UserContainer>
                <RegisterDate>
                {new Date(question.created_at as Date).toLocaleString()}
                </RegisterDate>
            </TopContainer>
            
            <MiddleContainer>
                <Subject>
                    {question.subject?.name}
                </Subject>
                <Title>
                    {question.title}
                </Title>
            </MiddleContainer>
        </MobileContainer>
    );
};
export default MobileQuestionItemCard;