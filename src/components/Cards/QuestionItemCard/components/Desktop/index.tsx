import { useNavigate } from 'react-router-dom';
import { IQuestion } from '../../../../../application/Domain/Entities/IQuestion';
import UserPhoto from '../../../../User/UserPhoto';
import { 
    DesktopContainer,
    DesktopSubject
} from './styles';

import { 
    TopContainer,
    UserContainer,
    Username,
    Title,
    MiddleContainer,
    RegisterDate,
} from '../../../common-styles';

interface IDesktopQuestionItemCardProps {
    question: IQuestion,
};

function DesktopQuestionItemCard({ question } : IDesktopQuestionItemCardProps ) {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Clicou')
        navigate('/answers/' + question.id)
    }

    return (
        <DesktopContainer clickable onClick={handleClick}>
            <TopContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={question.author?.photo as string} 
                        alt={question.author?.username as string}
                    />
                    <Username> {question.author?.username as string} </Username>
                </UserContainer>
                <MiddleContainer>
                    <DesktopSubject>
                        {question.subject?.name}
                    </DesktopSubject>
                    <Title>
                    {question.title}
                    </Title>
                </MiddleContainer>
                <RegisterDate>
                    {new Date(question.created_at as Date).toLocaleString()}
                </RegisterDate>
            </TopContainer>
        </DesktopContainer>
    );
};

export default DesktopQuestionItemCard;