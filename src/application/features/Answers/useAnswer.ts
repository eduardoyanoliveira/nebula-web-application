import { useState, useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGet from "../../CommonHooks/useGet";
import { IAnswer } from "../../Domain/Entities/IAnswer";
import { IQuestion } from "../../Domain/Entities/IQuestion";
import { httpAxiosGetClient } from "../../Infra/axios";
import { BestAnswerContext } from "../BestAnswer/BestAnswerContext";
import { baseAnswer } from "./data";

interface IUseAnswer {
    answer?: IAnswer,
};

export const useAnswer =  ({ answer } : IUseAnswer) => {

    const params = useParams();

    const { setBestAnswer } = useContext(BestAnswerContext);

    const [current, setCurrent] = useState(answer || baseAnswer);
    const [ editing, setEditing ] = useState<boolean>(false);

    const { data: question, isFetching } = useGet<IQuestion>( httpAxiosGetClient, 'questions/' +  params.id );

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

    }, [question, setBestAnswer]);
    

    const handleAnswerChange = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrent((prev) => prev = {
            ...prev,
            [e.target.name]: e.target.value
        });
    },[]);

    return {
        current,
        question,
        answers,
        editing,
        setEditing,
        handleAnswerChange,
    };
};
