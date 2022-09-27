import { IAnswer } from '../../../application/Domain/Entities/IAnswer';
import { useMediaQuery } from '../../../application/CommonHooks/useMediaQuery';

import TextBox from '../../Inputs/TextBox';
import UserPhoto from '../../User/UserPhoto';
import Like from '../../IconActions/Like';
import Icon from '../../IconActions/Icon';
import FavouriteAnswer from '../../Interactions/BestAnswer';

import { MdOutlineModeEditOutline } from 'react-icons/md';
import { BsCheck2Circle } from 'react-icons/bs';


import { 
    AnswerContainer,
    AnswerText
} from './styles';

import { 
    TopContainer,
    UserContainer,
    Username,
    RegisterDate,
    IconsContainer,
} from '../common-styles';

import { getUserCredentials } from '../../../application/useCases/UserCredentials';
import { useAnswer } from '../../../application/features/Answers/useAnswer';



const credentialsResponse = getUserCredentials.execute();

interface IAnswerCardProps {
    answer : IAnswer
};

function AnswerCard({ answer } : IAnswerCardProps) {

    const { 
        answerText, 
        editing,
        setEditing,
        handleChange,
        submitEdit
    } = useAnswer({ answer });

    const isDesktop = useMediaQuery(`(min-width: 650px)`);

    return (
        <AnswerContainer isDesktop={isDesktop}>
            <TopContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={answer.author?.photo as string} 
                        alt={answer.author?.username as string}
                    />
                    <Username> {answer.author?.username as string} </Username>
                </UserContainer>
                <RegisterDate>
                    {new Date(answer.created_at as Date).toLocaleString('pt-BR')}
                </RegisterDate>
            </TopContainer>
        
            {
                editing ?  (
                    <TextBox 
                        maxWidth='80%' 
                        margin='0 auto' 
                        value={answerText}
                        onChange={handleChange}
                    />
                ) : 
                (
                    <AnswerText isDesktop={isDesktop}>
                        {answerText}
                    </AnswerText>
                )
            }
        
                <IconsContainer> 
                    <FavouriteAnswer answer={answer}/>
                    <Like/>
                    {
                        (credentialsResponse.getValue().id === answer.author?.id && !editing) && (
                            <Icon 
                                margin=' 0 0 0 10px' 
                                onClick={() => setEditing((prev : boolean) => prev = ! prev )}
                                icon={<MdOutlineModeEditOutline/>}
                            />
                        )
                    }
                    {
                        editing && (
                            <Icon 
                                margin=' 0 0 0 10px' 
                                    onClick={() => submitEdit(answer, answerText)}
                                    icon={<BsCheck2Circle/>}
                            />
                        )
                    }
                </IconsContainer>
        </AnswerContainer>
    )
    
};

export default AnswerCard;