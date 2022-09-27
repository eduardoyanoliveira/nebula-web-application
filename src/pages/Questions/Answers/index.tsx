import React, { useEffect, useState, createContext } from 'react'
import { useParams } from 'react-router-dom';
import { IQuestion } from '../../../application/Domain/Entities/IQuestion';
import { handleSubmit } from '../../../application/CommonHooks/Submit';
import  { baseQuestionProps } from '../../../application/features/Questions/data';
import { httpAxiosGetClient, httpAxiosPatchClient, httpAxiosPostClient } from '../../../application/Infra/axios';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import AnswerCard from '../../../components/Cards/AnswerCard';
import QuestionCard from '../../../components/Cards/QuestionCard';
import FormContainer from '../../../components/FormComponents/FormContainer';
import TextBox from '../../../components/Inputs/TextBox';
import { MainContainer, Container, Title } from './styles';
import useGet from '../../../application/CommonHooks/useGet';
import { IAnswer } from '../../../application/Domain/Entities/IAnswer';
import { IBestAnswer } from '../../../application/Domain/Entities/IBestAnswer';

const baseAnswer = {
    id: '',
    text:'',
    question_id: '',
    author: null,
};

export interface BestAnswerContextProps {
    bestAnswer: IBestAnswer | undefined,
    setBestAnswer(bestAnswer: IBestAnswer | undefined): void
};

export const BestAnswerContext = createContext({} as BestAnswerContextProps);

function AnswersPage() {

    const params = useParams();

    const { data: question, isFetching } = useGet<IQuestion>( httpAxiosGetClient, 'questions/' +  params.id );
    const [bestAnswer, setBestAnswer] = useState<IBestAnswer | undefined>(question?.bestAnswers?.[0]);

    const { data: answers } = useGet<IAnswer[]>(
        httpAxiosGetClient, 
        'answers', 
        `question_id=${params.id}`
    );

    useEffect(() => {

        setCurrent( (prev) => prev = {
            ...prev,
            question_id: question?.id as string
        });

        setBestAnswer(question?.bestAnswers?.[0]);

    }, [question]);
    

    const [current, setCurrent] = useState(baseAnswer);

    const handleAnswerChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    return (
        <MainContainer>
            <QuestionCard fullDisplay question={question as IQuestion || baseQuestionProps}/>
            <Container>
                <Title>Respostas:</Title>
                <BestAnswerContext.Provider
                    value={{
                        bestAnswer, 
                        setBestAnswer
                    }}
                >
                    {
                        answers?.map((answer) => {
                            return (
                                <AnswerCard 
                                    answer={answer} 
                                    key={answer.id}
                                />
                            )
                        })
                    }
                </BestAnswerContext.Provider>
                <FormContainer>
                    <TextBox name='text' onChange={handleAnswerChange}/>
                </FormContainer>
                <FormContainer>
                    <Button 
                        text='Responder' 
                        backgroundColor={ButtonColors.primaryGradient} 
                        onClick={(e) => handleSubmit(e, { 
                            url: 'answers', 
                            item: current, 
                            httpPostClient: httpAxiosPostClient, 
                            httpPatchClient: httpAxiosPatchClient 
                        })}
                    />
                </FormContainer>
            </Container>
        </MainContainer>
    );
};

export default AnswersPage;

