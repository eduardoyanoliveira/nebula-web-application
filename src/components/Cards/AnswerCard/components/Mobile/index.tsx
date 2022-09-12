import { IAnswer } from '../../../../../application/Domain/Entities/IAnswer';
import UserPhoto from '../../../../User/UserPhoto';
import { BiLike } from 'react-icons/bi';

import { 
    MobileContainer,
    MobileText
} from './styles';

import { 
    TopContainer,
    UserContainer,
    Username,
    RegisterDate,
} from '../../../common-styles';


interface IMobileAnswerCardProps {
    answer: IAnswer
};

function MobileAnswerCard({ answer } : IMobileAnswerCardProps ) {

    return (
        <MobileContainer>
            <TopContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={answer.author?.photo as string} 
                        alt={answer.author?.username as string}
                        size={'45px'}
                    />
                    <Username> {answer.author?.username as string} </Username>
                </UserContainer>
                <RegisterDate>
                    {new Date(answer.created_at as Date).toLocaleString()}
                </RegisterDate>
            </TopContainer>
            
            <MobileText>
                {answer.text}
            </MobileText>
            <div>
                <BiLike/>
            </div>
        </MobileContainer>
    );
};
export default MobileAnswerCard;