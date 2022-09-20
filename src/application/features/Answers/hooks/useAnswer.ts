import { useState, useCallback } from "react";
import { IAnswer } from "../../../Domain/Entities/IAnswer";
import { axiosInstance } from "../../../Infra/axios/axios-instance";
import { HTTPAxiosPatchClient } from "../../../Infra/axios/http-axios-patch-client";

interface IEditAnswerProps {
    answer: IAnswer,
};

const httpPatchClient = new HTTPAxiosPatchClient(axiosInstance);

export const useAnswer =  ({ answer } : IEditAnswerProps) => {

    const [answerText, setAnswerText] = useState<string>(answer.text);
    const [ editing, setEditing ] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswerText(e.target.value);
    };

    const submitEdit = useCallback(async (answer: IAnswer, text: string) => {

        await httpPatchClient.patch('answers/' + answer.id, { text } );
        setEditing((prev : boolean) => prev = !prev );
    }, []);

    return {
        answerText,
        editing,
        setEditing,
        handleChange,
        submitEdit
    };
};
