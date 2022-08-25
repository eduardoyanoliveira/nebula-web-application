import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IQuestion } from '../../../Domain/Entities/IQuestion';
import { ISubject } from '../../../Domain/Entities/ISubject';
import { IUser } from '../../../Domain/Entities/IUser';
import { IHTTPGetClient } from '../../../Domain/HTTPRequestsClient/IHTTPGetClient';
import { IHTTPPatchClient } from '../../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../../Domain/HTTPRequestsClient/IHTTPPostClient';
import { GetItemfromLocalStorage } from '../../../useCases/Cache/get-item-from-local-storage';
import { GetUserCredentials } from '../../../useCases/UserCredentials/get-user-credentials';
import ListQuestions from './list-questions';



const baseQuestion :  IQuestion = {
    id: '',
    title: '',
    text: '',
    is_public: true,
    is_closed: false,
    subject_id: null,
    author: null
};

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

    const { questions, isFetching } = ListQuestions(httpGetClient , `author=$id$${credentialsResponse.getValue().user_id}`);

    const [current, setCurrent] = useState<IQuestion>(baseQuestion);

    useEffect(() => {
        const setUser = async () => {
            const userResponse = await httpGetClient.get(`users/${credentialsResponse.getValue().user_id}`);

            if(userResponse.isFailure){
                return alert(userResponse.error);
            };
    
            setCurrent((prev) => prev = { ...prev, author: (userResponse.getValue().data as IUser) });
        };
        
        setUser();
    },[httpGetClient]);

    console.log(current)

    const isMounted = useRef(true);

    const params = useParams();


    useEffect(() => {
        if(isMounted.current){
        setCurrent((prev) => prev = questions?.find(item => item.id === params.id) as IQuestion || prev);
        };
    },[params.id, questions]);

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

    const handleSubmit = async (e : FormEvent) => {

        e.preventDefault();

        if(!current.id){
        const response = await httpPostClient.post('questions', current);

        if(response.isFailure){
            return alert(response.error)
        };
        }else{
        const response = await httpPatchClient.patch(`questions/${current.id}`, current);

        if(response.isFailure){
            return alert(response.error)
        };
        };

        window.location.reload();
    };

    return { 
        baseQuestion, 
        isFetching,
        questions, 
        current, 
        setCurrent, 
        handleChange, 
        getItem, 
        getSubject,
        togglePublic, 
        handleSubmit 
    };
};

export default CreateAndUpdateQuestion;