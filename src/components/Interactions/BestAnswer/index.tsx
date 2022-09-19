import { getUserCredentials } from "../../../application/useCases/UserCredentials";
import { BsSuitHeartFill } from 'react-icons/bs';
import Icon from "../../IconActions/Icon";
import { IBestAnswer } from "../../../application/Domain/Entities/IBestAnswer";
import { IAnswer } from "../../../application/Domain/Entities/IAnswer";


const credentialsResponse = getUserCredentials.execute();

interface IBestAnswerProps {
    bestAnswer: IBestAnswer | undefined,
    answer: IAnswer
};

function BestAnswer({ bestAnswer, answer } : IBestAnswerProps) {

    const selected = bestAnswer?.answer_id === answer.id;

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
            />
        ): null
    );
};

export default BestAnswer;