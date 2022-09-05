import { IQuestion } from '../../../../application/Domain/Entities/IQuestion';
import UserPhoto from '../../../User/UserPhoto';
import { 
    Container, 
    TopContainer,
    UserContainer, 
    Username, 
    QuestionContainer,
    Subject, 
    QuestionTitle,
    RegisterDate 
} from './styles';

interface IDesktopQuestionDisplayProps {
    question: IQuestion
};

function MobileQuestionDisplay({ question } : IDesktopQuestionDisplayProps ) {
    return (
        <Container key={question.id}>
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
            
            <QuestionContainer>
                <Subject>
                {question.subject?.name}
                </Subject>
                <QuestionTitle>
                {question.title}
                </QuestionTitle>
            </QuestionContainer>
        </Container>
    );
};
export default MobileQuestionDisplay;