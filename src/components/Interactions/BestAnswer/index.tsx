import { getUserCredentials } from "../../../application/useCases/UserCredentials";
import { BsSuitHeartFill } from 'react-icons/bs';
import Icon from "../../IconActions/Icon";
import { IBestAnswer } from "../../../application/Domain/Entities/IBestAnswer";
import { IAnswer } from "../../../application/Domain/Entities/IAnswer";
import { httpAxiosPostClient } from "../../../application/Infra/axios";


const credentialsResponse = getUserCredentials.execute();

interface IBestAnswerProps {
    bestAnswer: IBestAnswer | undefined,
    answer: IAnswer
};

function BestAnswer({ bestAnswer, answer } : IBestAnswerProps) {

    const selected = bestAnswer?.props.answer_id === answer.id;

    const handlePostClick = () => {
        httpAxiosPostClient.post('best_answers', { question_id: answer.question.id, answer_id: answer.id });
        window.location.reload();
    };

    if(selected) {

        return (
            <Icon 
                margin=' 0 10px 0 0' 
                selected
                icon={<BsSuitHeartFill/>}
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