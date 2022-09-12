import { IAnswer } from '../../../../../application/Domain/Entities/IAnswer';
import UserPhoto from '../../../../User/UserPhoto';
import Like from '../../../../IconActions/Like';
import Edit from '../../../../IconActions/Edit';

import { 
    DesktopContainer,
    DesktopText,
    IconsContainer,
} from './styles';

import { 
    TopContainer,
    UserContainer,
    Username,
    RegisterDate,
} from '../../../common-styles';

interface IDesktopAnswerCardProps {
    answer: IAnswer,
};

function DesktopAnswerCard({ answer } : IDesktopAnswerCardProps ) {

    return (
        <DesktopContainer >
            <TopContainer>
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
            </TopContainer>
            <DesktopText>
                {answer.text}
            </DesktopText>
            <IconsContainer>
                <Like/>
                <Edit margin=' 0 0 0 10px'/>
            </IconsContainer>
        </DesktopContainer>
    );
};

export default DesktopAnswerCard;