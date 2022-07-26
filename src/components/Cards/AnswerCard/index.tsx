import { IAnswer } from '../../../application/Domain/Entities/IAnswer';
import { useMediaQuery } from '../../../application/CommonHooks/useMediaQuery';

import TextBox from '../../Inputs/TextBox';
import UserPhoto from '../../User/UserPhoto';
import Like from '../../IconActions/Like';
import Icon from '../../IconActions/Icon';
import FavouriteAnswer from '../../Interactions/FavouriteAnswer';

import { MdOutlineModeEditOutline } from 'react-icons/md';
import { BsCheck2Circle } from 'react-icons/bs';

import useGet from '../../../application/CommonHooks/useGet';

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
import { httpAxiosDeleteClient, httpAxiosGetClient, httpAxiosPatchClient, httpAxiosPostClient } from '../../../application/Infra/axios';
import { handleSubmit } from '../../../application/CommonHooks/Submit';
import { FormEvent, useEffect, useState } from 'react';



const credentialsResponse = getUserCredentials.execute();

interface IAnswerCardProps {
    answer : IAnswer
};

function AnswerCard( { answer } : IAnswerCardProps) {

    const { 
        current, 
        editing,
        setEditing,
        handleAnswerChange,
    } = useAnswer({ answer });

    const isDesktop = useMediaQuery(`(min-width: 650px)`);

    const { data: likeAmount } = useGet<number>(
        httpAxiosGetClient, 
        `likes/count_likes_by_answer/${answer.id}`, 
        ''
    );

    const { data: likeAlreadyExists } = useGet<boolean>(
        httpAxiosGetClient, 
        `likes/find_like_by_author_and_answer/${answer.id}`, 
        ''
    );

    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(likeAlreadyExists || false);

    useEffect(() => {
      setLikes((prev) => prev = likeAmount || 0);
    },[likeAmount]);
    
    useEffect(() => {
        setHasLiked((prev) => prev = likeAlreadyExists || false);
    },[likeAlreadyExists]);

    const giveLike = async () => {

        setLikes((prev) => prev + 1);
        setHasLiked((prev) => !prev);
        await httpAxiosPostClient.post('likes', {
            answerId: answer.id
        });
    };

    const removeLike = async () => {

        setLikes((prev) => prev - 1);
        setHasLiked((prev) => !prev);
        await httpAxiosDeleteClient.delete(`likes/`, answer.id as string);
    }

    const handleLikeClick = () => {
        hasLiked ? removeLike() : giveLike();
    };
  
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
                        name='text'
                        value={current.text}
                        onChange={handleAnswerChange}
                    />
                ) : 
                (
                    <AnswerText isDesktop={isDesktop}>
                        {current.text}
                    </AnswerText>
                )
            }
        
                <IconsContainer> 
                    <FavouriteAnswer answer={answer}/>
                    <Like likeAmount={likes} onClick={handleLikeClick} isActive={hasLiked}/>
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
                                margin='0 0 0 10px' 
                                onClick={(e: FormEvent) => handleSubmit(e, { 
                                    url: 'answers',
                                    item: current, 
                                    httpPatchClient : httpAxiosPatchClient, 
                                    httpPostClient : httpAxiosPostClient,
                                    callbackFn: () => setEditing((prev : boolean) => prev = !prev ),
                                    reloadPage: false
                                })}
                                icon={<BsCheck2Circle/>}
                            />
                        )
                    }
                </IconsContainer>
        </AnswerContainer>
    )
    
};

export default AnswerCard;