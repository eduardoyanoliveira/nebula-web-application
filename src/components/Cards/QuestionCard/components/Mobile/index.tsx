import { IQuestion } from '../../../../../application/Domain/Entities/IQuestion';
import UserPhoto from '../../../../User/UserPhoto';

import { 
    MobileContainer
} from './styles';

import { 
    TopContainer,
    MiddleContainer,
    UserContainer,
    Username,
    Title,
    Text,
    Subject,
    RegisterDate,
} from '../../../common-styles';


interface IMobileQuestionCardProps {
    question: IQuestion
};

function MobileQuestionCard({ question } : IMobileQuestionCardProps ) {

    return (
        <MobileContainer>
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
            <Text>
                {question.text}
            </Text>
        </MobileContainer>
    );
};
export default MobileQuestionCard;