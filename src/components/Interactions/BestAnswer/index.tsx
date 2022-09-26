import { getUserCredentials } from "../../../application/useCases/UserCredentials";
import { BsSuitHeartFill } from 'react-icons/bs';
import Icon from "../../IconActions/Icon";
import { IBestAnswer } from "../../../application/Domain/Entities/IBestAnswer";
import { IAnswer } from "../../../application/Domain/Entities/IAnswer";
import { httpAxiosDeleteClient, httpAxiosPatchClient, httpAxiosPostClient } from "../../../application/Infra/axios";


const credentialsResponse = getUserCredentials.execute();

interface IBestAnswerProps {
    bestAnswer: IBestAnswer | undefined,
    answer: IAnswer
};

function BestAnswer({ bestAnswer, answer } : IBestAnswerProps) {

    const selected = bestAnswer?.answer_id === answer.id;

    const handlePostClick = async () => {
        await httpAxiosPostClient.post('best_answers', { question_id: answer.question.id, answer_id: answer.id });
        await httpAxiosPatchClient.patch('questions/' + answer.question.id, { is_closed: true });
       
    };

    const handleDeleteClick = async () => {
        await httpAxiosDeleteClient.delete('best_answers/', answer.question.id);
        await httpAxiosPatchClient.patch('questions/' + answer.question.id, { is_closed: false });

    }

    if(selected) {

        return (
            <Icon 
                margin=' 0 10px 0 0' 
                selected
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

export default BestAnswer;