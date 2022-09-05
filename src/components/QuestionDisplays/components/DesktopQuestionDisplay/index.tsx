import { useNavigate } from 'react-router-dom';
import { IQuestion } from '../../../../application/Domain/Entities/IQuestion';
import UserPhoto from '../../../User/UserPhoto';
import { 
    Container, 
    UserContainer, 
    Username, 
    MiddleContainer, 
    Subject, 
    QuestionTitle,
    RegisterDate, 
    QuestionText,
    HeaderContainer
} from './styles';

interface IDesktopQuestionDisplayProps {
    question: IQuestion,
    fullDisplay?: boolean
};

function DesktopQuestionDisplay({ question, fullDisplay } : IDesktopQuestionDisplayProps ) {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Clicou')
        navigate('/answers/' + question.id)
    }

    return (
        <Container clickable={!fullDisplay} onClick={() => fullDisplay ? '' : handleClick()}>
            <HeaderContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={question.author?.photo as string} 
                        alt={question.author?.username as string}
                    />
                    <Username> {question.author?.username as string} </Username>
                </UserContainer>
                <MiddleContainer>
                    <Subject>
                        {question.subject?.name}
                    </Subject>
                    <QuestionTitle>
                    {question.title}
                    </QuestionTitle>
                </MiddleContainer>
                <RegisterDate>
                    {new Date(question.created_at as Date).toLocaleString()}
                </RegisterDate>
            </HeaderContainer>
            { fullDisplay && (
                    <QuestionText>
                        {question.text}
                    </QuestionText>
                ) 
            }
        </Container>
    );
};

export default DesktopQuestionDisplay;