import { IQuestion } from '../../../application/Domain/Entities/IQuestion';
import { useMediaQuery } from '../../../application/CommonHooks/useMediaQuery';

import { useNavigate } from 'react-router-dom';
import UserPhoto from '../../User/UserPhoto';

import { 
    QuestionContainer,
    QuestionSubject,
    QuestionText
} from './styles';

import { 
    TopContainer,
    UserContainer,
    Username,
    Title,
    MiddleContainer,
    RegisterDate,
} from '../common-styles';

interface IQuestionItemCardProps {
    question : IQuestion,
    fullDisplay?: boolean
};

function QuestionItemCard({ question, fullDisplay } : IQuestionItemCardProps) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/answers/' + question.id)
    }

    const isDesktop = useMediaQuery(`(min-width: 650px)`);

    return (
        <QuestionContainer isDesktop={isDesktop} clickable={!fullDisplay} onClick={handleClick}>
            <TopContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={question.author?.photo as string} 
                        alt={question.author?.username as string}
                    />
                    <Username> {question.author?.username as string} </Username>
                </UserContainer>
                {
                    isDesktop && (
                    <MiddleContainer>
                        <QuestionSubject isDesktop={isDesktop}>
                            {question.subject?.name}
                        </QuestionSubject>
                        <Title>
                        {question.title}
                        </Title>
                    </MiddleContainer>
                    )
                }
                
                <RegisterDate>
                    {new Date(question.created_at as Date).toLocaleString('pt-BR')}
                </RegisterDate>
            </TopContainer>
            {
                !isDesktop && (
                    <MiddleContainer>
                        <QuestionSubject isDesktop={isDesktop}>
                            {question.subject?.name}
                        </QuestionSubject>
                        <Title>
                        {question.title}
                        </Title>
                    </MiddleContainer>
                )
            }
            {
                fullDisplay && (
                    <QuestionText isDesktop={isDesktop}>
                        {question.text}
                    </QuestionText>
                )
            }
        </QuestionContainer>
    );
};

export default QuestionItemCard;