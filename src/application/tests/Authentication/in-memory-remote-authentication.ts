import { Result } from "../../Core/Result";
import { IUserCredentialsProps } from "../../Domain/Authentication/IAuthentication";
import { IHTTPPostClient } from "../../Domain/HTTPRequestsClient/IHTTPPostClient";

interface User {
    username: string,
    email: string,
    password: string
};

interface RemoteAuthenticationBodyProps {
    email: string,
    password: string
};

interface Response {
    data: IUserCredentialsProps
}

export class InMemoryRemoteAuthentication implements IHTTPPostClient{

    public users : User[] = [];

    public url: string = '';

    async post(url: string, body: RemoteAuthenticationBodyProps): Promise<Result<Response>> {
        
        if(url !== this.url){
            return Result.fail<Response>('Wrong url pattern');
        };

        const user = this.users.find(item => item.email === body.email && item.password === body.password);

        if(!user){
            return Result.fail<Response>('Wrong credentials');
        };

        const respose : Response = {
            data:{
                id: 'gasjklskg456s4ahdsf4g6-gadsg4',
                username: user.username,
                email: user.email,
                token: 'sfadf3gherktjg3480tju9hjifadjgds[ghk4-t50y-5eyragd4510as20g0fa2sgh0-w-i93jgrkegnaskl'
            }
        } ;

        return Result.ok<Response>(respose);
    };
};