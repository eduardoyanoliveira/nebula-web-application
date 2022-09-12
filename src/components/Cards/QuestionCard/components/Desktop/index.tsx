import { IQuestion } from '../../../../../application/Domain/Entities/IQuestion';
import UserPhoto from '../../../../User/UserPhoto';
import { 
    DesktopContainer,
    DesktopText,
} from './styles';

import { 
    TopContainer,
    UserContainer,
    Username,
    Title,
    MiddleContainer,
    Subject,
    RegisterDate,
} from '../../../common-styles';

interface IDesktopQuestionCardProps {
    question: IQuestion,
};

function DesktopQuestionCard({ question } : IDesktopQuestionCardProps ) {

    return (
        <DesktopContainer >
            <TopContainer>
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
                    <Title>
                    {question.title}
                    </Title>
                </MiddleContainer>
                <RegisterDate>
                    {new Date(question.created_at as Date).toLocaleString()}
                </RegisterDate>
            </TopContainer>
            <DesktopText>
                {question.text}
            </DesktopText>
        </DesktopContainer>
    );
};

export default DesktopQuestionCard;