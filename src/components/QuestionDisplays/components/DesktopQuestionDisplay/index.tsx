import { IQuestion } from '../../../../application/Domain/Entities/IQuestion';
import UserPhoto from '../../../User/UserPhoto';
import { 
    Container, 
    UserContainer, 
    Username, 
    MiddleContainer, 
    Subject, 
    QuestionTitle,
    RegisterDate 
} from './styles';

interface IDesktopQuestionDisplayProps {
    question: IQuestion
};

function DesktopQuestionDisplay({ question } : IDesktopQuestionDisplayProps ) {
    return (
        <Container>
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
        </Container>
    );
};

export default DesktopQuestionDisplay;