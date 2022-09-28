import { getUserCredentials } from "../../../application/useCases/UserCredentials";
import { BsSuitHeartFill } from 'react-icons/bs';
import Icon from "../../IconActions/Icon";
import { httpAxiosDeleteClient, httpAxiosPatchClient, httpAxiosPostClient } from "../../../application/Infra/axios";
import { IAnswer } from "../../../application/Domain/Entities/IAnswer";
import useBestAnswer from "../../../application/features/BestAnswer/useBestAnswer";


const credentialsResponse = getUserCredentials.execute();

interface IFavouriteProps {
    answer: IAnswer
};

function FavouriteAnswer({ answer } : IFavouriteProps) {

    const {
        bestAnswer,
        handlePostClick,
        handleDeleteClick
    } = useBestAnswer({
        answer,
        httpPostClient: httpAxiosPostClient,
        httpPatchClient: httpAxiosPatchClient,
        httpDeleteClient: httpAxiosDeleteClient
    });

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