import { IAnswer } from '../../application/Domain/Entities/IAnswer';
import UserPhoto from '../User/UserPhoto';
import { 
    Container, 
    UserContainer, 
    Username, 
    RegisterDate, 
    Text,
    HeaderContainer
} from './styles';

interface IAnswerDisplayProps {
    answer: IAnswer
};

function AnswerDisplay({ answer } : IAnswerDisplayProps) {
    return (
        <Container>
            <HeaderContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={answer.author?.photo as string} 
                        alt={answer.author?.username as string}
                    />
                    <Username> {answer.author?.username as string} </Username>
                </UserContainer>
                <RegisterDate>
                    {new Date(answer.created_at as Date).toLocaleString()}
                </RegisterDate>
            </HeaderContainer>
                <Text>
                    {answer.text}
                </Text>
        </Container>
    )
}

export default AnswerDisplay;