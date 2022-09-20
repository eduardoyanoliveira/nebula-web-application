import { IHTTPGetClient } from "../Domain/HTTPRequestsClient/IHTTPGetClient";
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param url the Url that will be use to perform the get operation
 * @param urlParams a string of url params to help filter data
 * @param options useQuery options object
 */
function useGet<T>(
    httpGetClient: IHTTPGetClient,
    url: string, 
    urlParams?: string, 
    options?: Omit<UseQueryOptions<T, unknown, T, QueryKey>, 'initialData' | 'queryKey'>
){

    const params = urlParams ? `/?${urlParams}` : '';
    const fullUrl = url + params ;

    const { data, isFetching, error } = useQuery<T>([url], async () => {

        const response = await httpGetClient.get(fullUrl);

        if(response.isFailure){
            console.log(response.error);
        };

        return response.getValue().data;
    },{
        ...options
    });

    return { isFetching, error, data };
};

export default useGet;