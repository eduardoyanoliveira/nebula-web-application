import React, { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IQuestion } from '../../../application/Domain/Entities/IQuestion';
import GetBestAnswer from '../../../application/features/Answers/hooks/get-best-answer';
import handleSubmit from '../../../application/hooks/handleSubmit';
import { baseQuestion } from '../../../application/features/Questions/data';
import { httpAxiosGetClient, httpAxiosPatchClient, httpAxiosPostClient } from '../../../application/Infra/axios';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import AnswerCard from '../../../components/Cards/AnswerCard';
import QuestionCard from '../../../components/Cards/QuestionCard';
import FormContainer from '../../../components/FormComponents/FormContainer';
import TextBox from '../../../components/Inputs/TextBox';
import { MainContainer, Container, Title } from './styles';
import useGet from '../../../application/hooks/useGet';
import { IAnswer } from '../../../application/Domain/Entities/IAnswer';


const baseAnswer = {
    id: '',
    text:'',
    question_id: '',
    author: null,
};

function AnswersPage() {

    const params = useParams();

    const { data: questions, isFetching } = useGet<IQuestion[]>(
        httpAxiosGetClient, 
        'questions' , 
        'id=' + params.id,
        { staleTime: 1000 * 60  }
    );

    const { bestAnswer } = GetBestAnswer(httpAxiosGetClient, params.id as string);

    const { data: answers } = useGet<IAnswer[]>(
        httpAxiosGetClient, 
        'answers', 
        `question_id=${params.id}`,
        { staleTime: 1000 * 60  }
    );

    useEffect(() => {

        setCurrent( (prev) => prev = {
            ...prev,
            question_id: questions?.[0].id as string
        });

    }, [questions]);
    

    const [current, setCurrent] = useState(baseAnswer);

    const handleAnswerChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    const submitAnswer = async (e: FormEvent) => {
        e.preventDefault();

        await handleSubmit({ 
            url: 'answers', 
            item: current, 
            httpPostClient: httpAxiosPostClient, 
            httpPatchClient: httpAxiosPatchClient 
        });
        window.location.reload();
    };

    return (
        <MainContainer>
            <QuestionCard fullDisplay question={questions?.[0] as IQuestion || baseQuestion}/>
            <Container>
                <Title>Respostas:</Title>
                {
                    answers?.map((answer) => {
                        return (
                            <AnswerCard answer={answer} bestAnswer={bestAnswer} key={answer.id}/>
                        )
                    })
                }
                <FormContainer>
                    <TextBox name='text' onChange={handleAnswerChange}/>
                </FormContainer>
                <FormContainer>
                    <Button text='Responder' backgroundColor={ButtonColors.primaryGradient} onClick={submitAnswer}/>
                </FormContainer>
            </Container>
        </MainContainer>
    );
};

export default AnswersPage;

