import { ISubject } from "../../../Domain/Entities/ISubject";
import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import { useQuery } from '@tanstack/react-query';

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param onlyActive if true returns only the subjects if the attribute is_active equals to true
 * @returns a list of subjects : ISubject[]
 */
const ListSubjects = (httpGetClient: IHTTPGetClient, onlyActive?: boolean) => {
    const url = onlyActive ? 'subjects/?is_active=true' : 'subjects';

    const { data: subjects, isFetching, error } = useQuery<ISubject[]>([url], async () => {

        const response = await httpGetClient.get(url);

        if(response.isFailure){
            console.log(response.error);
        };

        return response.getValue().data;
    },{
        staleTime: 1000 * 60 // 1 minute
    });

    return { isFetching, error, subjects };
};

export default ListSubjects;