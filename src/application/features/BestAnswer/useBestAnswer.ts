import { useContext } from "react";
import { BestAnswerContext } from "./BestAnswerContext";
import { IAnswer } from "../../Domain/Entities/IAnswer";
import { IHTTPDeleteClient } from "../../Domain/HTTPRequestsClient/IHTTPDeleteClient";
import { IHTTPPatchClient } from "../../Domain/HTTPRequestsClient/IHTTPPatchClient";
import { IHTTPPostClient } from "../../Domain/HTTPRequestsClient/IHTTPPostClient";

interface IFavouriteProps {
    answer: IAnswer,
    httpPostClient: IHTTPPostClient,
    httpPatchClient: IHTTPPatchClient,
    httpDeleteClient: IHTTPDeleteClient
};

function useBestAnswer({ answer, httpPostClient, httpPatchClient, httpDeleteClient }: IFavouriteProps) {
    const {
        bestAnswer,
        setBestAnswer
    } = useContext(BestAnswerContext);

    const handlePostClick = async () => {
        const newBestAnswer = {
            answer_id: answer.id as string,
            question_id: answer.question.id as string, 
            created_at: new Date()
        };

        await httpPostClient.post('best_answers', newBestAnswer);
        await httpPatchClient.patch('questions/' + answer.question.id, { is_closed: true });
        setBestAnswer(newBestAnswer);
    };

    const handleDeleteClick = async () => {
        await httpDeleteClient.delete('best_answers/', answer.question.id);
        await httpPatchClient.patch('questions/' + answer.question.id, { is_closed: false });
        setBestAnswer(undefined);
    };
    
    return {
        bestAnswer,
        handlePostClick,
        handleDeleteClick
    };
};

export default useBestAnswer;