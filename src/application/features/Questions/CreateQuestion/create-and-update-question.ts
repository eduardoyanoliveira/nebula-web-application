import React, { FormEvent, useState } from 'react'
import { ISubject } from '../../../Domain/Entities/ISubject';
import { IHTTPGetClient } from '../../../Domain/HTTPRequestsClient/IHTTPGetClient';
import { IHTTPPatchClient } from '../../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../../Domain/HTTPRequestsClient/IHTTPPostClient';
import { GetItemfromLocalStorage } from '../../../useCases/Cache/get-item-from-local-storage';
import { GetUserCredentials } from '../../../useCases/UserCredentials/get-user-credentials';
import handleSubmit from '../../../hooks/handleSubmit';
import useGetByUrlId from '../../../hooks/useGetByUrlId';
import useGenerateBaseQuestion from '../data';
import { IQuestion } from '../../../Domain/Entities/IQuestion';
import useGet from '../../../hooks/useGet';


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

    const { data: questions, isFetching, error } = useGet<IQuestion[]>(
        httpGetClient, 
        'questions',
        `author=$id$${credentialsResponse.getValue().id}`,
        {
          staleTime: 1000 * 60 // 1 minute
        }
    );

    const baseQuestion = useGenerateBaseQuestion();

    const [current, setCurrent] = useState<IQuestion>(baseQuestion);

    const data = questions?.map((question) => {
        const { id, title, text, subject, author, created_at, updated_at, is_public, is_closed } = question;
        return {
            id,
            title,
            text,
            subject_id: subject?.id,
            author,
            created_at,
            updated_at,
            is_public,
            is_closed
        };
    });

   useGetByUrlId<IQuestion>({ setItem: setCurrent, data: data });

    const getItem = (value: IQuestion) => {
        setCurrent((prev) => prev = value);
    };

    const getSubject = ( value: ISubject ) => {
        setCurrent((prev) => prev = { ...prev, subject: value as ISubject });
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
        window.location.reload();
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