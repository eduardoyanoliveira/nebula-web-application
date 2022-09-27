import { getUserCredentials } from "../../../application/useCases/UserCredentials";
import { BsSuitHeartFill } from 'react-icons/bs';
import Icon from "../../IconActions/Icon";
import { httpAxiosDeleteClient, httpAxiosPatchClient, httpAxiosPostClient } from "../../../application/Infra/axios";
import { IAnswer } from "../../../application/Domain/Entities/IAnswer";
import { useContext } from "react";
import { BestAnswerContext, BestAnswerContextProps } from "../../../pages/Questions/Answers";


const credentialsResponse = getUserCredentials.execute();

interface IFavouriteProps {
    answer: IAnswer
};

function FavouriteAnswer({ answer } : IFavouriteProps) {

    const {
        bestAnswer,
        setBestAnswer
    } = useContext<BestAnswerContextProps>(BestAnswerContext);

    const handlePostClick = async () => {
        const newBestAnswer = {
            answer_id: answer.id as string,
            question_id: answer.question.id as string, 
            created_at: new Date()
        };

        await httpAxiosPostClient.post('best_answers', newBestAnswer);
        await httpAxiosPatchClient.patch('questions/' + answer.question.id, { is_closed: true });
        setBestAnswer(newBestAnswer);
    };

    const handleDeleteClick = async () => {
        await httpAxiosDeleteClient.delete('best_answers/', answer.question.id);
        await httpAxiosPatchClient.patch('questions/' + answer.question.id, { is_closed: false });
        setBestAnswer(undefined);
    };

    if(bestAnswer?.answer_id === answer.id) {

        return (
            <Icon 
                margin=' 0 10px 0 0' 
                selected={true}
                icon={<BsSuitHeartFill/>}
                onClick={handleDeleteClick}
            />
        );
    };

    const display = credentialsResponse.getValue().id === answer.question.author?.id 
        && answer.question.author?.id !== answer.author?.id
        && !bestAnswer;

    return (
        display ? (
            <Icon 
                margin=' 0 10px 0 0' 
                icon={<BsSuitHeartFill/>}
                onClick={handlePostClick}
            />
        ): null
    );
};

export default FavouriteAnswer;