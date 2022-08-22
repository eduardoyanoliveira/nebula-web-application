import { IUser } from "../../../Domain/Entities/IUser";
import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import { useQuery } from '@tanstack/react-query';

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param onlyActive if true returns only the users if the attribute is_active equals to true
 * @returns a list of users : IUser[]
 */
const ListUsers = (httpGetClient: IHTTPGetClient, onlyActive?: boolean) => {
    const url = onlyActive ? 'users/?is_active=true' : 'users';

    const { data: users, isFetching, error } = useQuery<IUser[]>([url], async () => {

        const response = await httpGetClient.get(url);

        if(response.isFailure){
            console.log(response.error);
        };

        return response.getValue().data;
    },{
        staleTime: 1000 * 60 // 1 minute
    });

    return { isFetching, error, users };
};

export default ListUsers;