import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import { useQuery } from '@tanstack/react-query';
import { IAnswer } from "../../../Domain/Entities/IAnswer";

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param urlParams a string of url params to help filter data
 * @returns a list of answers : IAnswer[]
 */
const ListAnswers = (httpGetClient: IHTTPGetClient, urlParams?: string) => {
    const params = urlParams ? `/?${urlParams}` : '';
    const url = 'answers' + params ;

    const { data: answers, isFetching, error } = useQuery<IAnswer[]>([url], async () => {

        const response = await httpGetClient.get(url);

        if(response.isFailure){
            console.log(response.error);
        };

        return response.getValue().data;
    },{
        staleTime: 1000 * 60 // 1 minute
    });

    return { isFetching, error, answers };
};

export default ListAnswers;