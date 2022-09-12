import React, { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IQuestion } from '../../../application/Domain/Entities/IQuestion';
import ListAnswers from '../../../application/features/Answers/components/list-questions';
import handleSubmit from '../../../application/features/hooks/handleSubmit';
import ListQuestios from '../../../application/features/Questions/components/list-questions';
import { baseQuestion } from '../../../application/features/Questions/data';
import { axiosInstance } from '../../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../../application/Infra/axios/http-axios-get-client';
import { HTTPAxiosPatchClient } from '../../../application/Infra/axios/http-axios-patch-client';
import { HTTPAxiosPostClient } from '../../../application/Infra/axios/http-axios-post-client';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import AnswerCard from '../../../components/Cards/AnswerCard';
import QuestionCard from '../../../components/Cards/QuestionCard';
import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import TextBox from '../../../components/Inputs/TextBox';


const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);

const baseAnswer = {
    id: '',
    text:'',
    question_id: '',
    author: null,
};

const httpPostClient = new HTTPAxiosPostClient(axiosInstance);
const httpPatchClient = new HTTPAxiosPatchClient(axiosInstance);

function AnswersPage() {

    const params = useParams();

    const { questions, isFetching } = ListQuestios(httpAxiosGetClient, 'id=' + params.id);
    const { answers } = ListAnswers(httpAxiosGetClient, 'question_id=' + params.id);

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

        await handleSubmit({ url: 'answers', item: current, httpPostClient: httpPostClient, httpPatchClient: httpPatchClient });
    };

    return (
        <Form title='Respostas'>
            <QuestionCard question={questions?.[0] as IQuestion || baseQuestion}/>
            {
                answers?.map((answer) => {
                    return (
                        <AnswerCard answer={answer} key={answer.id}/>
                    )
                })
            }
            <FormContainer>
                <TextBox name='text' onChange={handleAnswerChange}/>
            </FormContainer>
            <FormContainer>
                <Button text='Responder' backgroundColor={ButtonColors.primaryGradient} onClick={submitAnswer}/>
            </FormContainer>
        </Form>
    );
};

export default AnswersPage;

