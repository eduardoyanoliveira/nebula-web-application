import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import { useQuery } from '@tanstack/react-query';
import { IQuestion } from "../../../Domain/Entities/IQuestion";

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param urlParams a string of url params to help filter data
 * @returns a list of questions : IQuestio[]
 */
const ListQuestios = (httpGetClient: IHTTPGetClient, urlParams?: string) => {
    const params = urlParams ? `/?${urlParams}` : '';
    const url = 'questions' + params ;

    const { data: questions, isFetching, error } = useQuery<IQuestion[]>([url], async () => {

        const response = await httpGetClient.get(url);

        if(response.isFailure){
            console.log(response.error);
        };

        return response.getValue().data;
    },{
        staleTime: 1000 * 60 // 1 minute
    });

    return { isFetching, error, questions };
};

export default ListQuestios;