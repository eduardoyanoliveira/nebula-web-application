import React, { FormEvent, useState } from 'react'
import { IQuestion } from '../../../Domain/Entities/IQuestion';
import { ISubject } from '../../../Domain/Entities/ISubject';
import { IHTTPGetClient } from '../../../Domain/HTTPRequestsClient/IHTTPGetClient';
import { IHTTPPatchClient } from '../../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../../Domain/HTTPRequestsClient/IHTTPPostClient';
import { GetItemfromLocalStorage } from '../../../useCases/Cache/get-item-from-local-storage';
import { GetUserCredentials } from '../../../useCases/UserCredentials/get-user-credentials';
import handleSubmit from '../../hooks/handleSubmit';
import useGetByUrlId from '../../hooks/useGetByUrlId';
import useGenerateBaseQuestion from '../data';
import ListQuestions from './list-questions';

const userCredentials = new GetUserCredentials(new GetItemfromLocalStorage());

const credentialsResponse = userCredentials.execute();

if(credentialsResponse.isFailure){
    alert(credentialsResponse.error);
};


function CreateAndUpdateQuestion(
    httpGetClient: IHTTPGetClient,
    httpPostClient: IHTTPPostClient,
    httpPatchClient: IHTTPPatchClient
) {

    const { questions, isFetching } = ListQuestions(httpGetClient , `author=$id$${credentialsResponse.getValue().id}`);

    const baseQuestion = useGenerateBaseQuestion();

    const [current, setCurrent] = useState<IQuestion>(baseQuestion);

   useGetByUrlId({ setItem: setCurrent, data: questions });

    const getItem = (value: IQuestion) => {
        setCurrent((prev) => prev = value);
    };

    const getSubject = ( value: ISubject ) => {
        setCurrent((prev) => prev = { ...prev, subject_id: value.id as string });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {  
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    const togglePublic = (value: boolean) => {
        setCurrent((prev) => prev = { ...prev, is_public: value });
    };

    const resetForm = () => {
        setCurrent(baseQuestion);
    };

    const thisHandleSubmit = async (e : FormEvent) => {

        e.preventDefault();

        await handleSubmit({
            url: 'questions',
            item: current,
            httpPatchClient,
            httpPostClient
        });

        window.location.reload();
    };

    return { 
        baseQuestion, 
        isFetching,
        questions, 
        current, 
        resetForm, 
        handleChange, 
        getItem, 
        getSubject,
        togglePublic, 
        handleSubmit: thisHandleSubmit
    };
};

export default CreateAndUpdateQuestion;