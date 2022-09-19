import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import { useQuery } from '@tanstack/react-query';
import { IBestAnswer } from "../../../Domain/Entities/IBestAnswer";

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param questionId a string of url params to help filter data
 * @returns a list of answers : IBestAnswer[]
 */
const GetBestAnswer = (httpGetClient: IHTTPGetClient, questionId: string) => {
    const url = 'best_answers/find_by_question/' + questionId ;

    const { data: bestAnswer, isFetching, error } = useQuery<IBestAnswer>([url], async () => {

        const response = await httpGetClient.get(url);

        if(response.isFailure){
            console.log(response.error);
        };

        return response.getValue().data;
    });

    return { isFetching, error, bestAnswer };
};

export default GetBestAnswer;