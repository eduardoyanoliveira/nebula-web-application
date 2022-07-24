import { Result } from "../../core/Result";
import { IUserCredentialsProps } from "../../Domain/Authentication/IAuthentication";
import { IHTTPPostClient } from "../../Infra/interfaces/IHTTPPostClient";

interface User {
    username: string,
    email: string,
    password: string
};

interface RemoteAuthenticationBodyProps {
    email: string,
    password: string
};

export class InMemoryRemoteAuthentication implements IHTTPPostClient<RemoteAuthenticationBodyProps, IUserCredentialsProps>{

    public users : User[] = [];

    public url: string = '';

    async post(url: string, body: RemoteAuthenticationBodyProps): Promise<Result<IUserCredentialsProps>> {
        
        if(url !== this.url){
            return Result.fail<IUserCredentialsProps>('Wrong url pattern');
        };

        const user = this.users.find(item => item.email === body.email && item.password === body.password);

        if(!user){
            return Result.fail<IUserCredentialsProps>('Wrong credentials');
        };

        const respose : IUserCredentialsProps = {
            id: 'gasjklskg456s4ahdsf4g6-gadsg4',
            username: user.username,
            email: user.email,
            token: 'sfadf3gherktjg3480tju9hjifadjgds[ghk4-t50y-5eyragd4510as20g0fa2sgh0-w-i93jgrkegnaskl'
        } ;

        return Result.ok<IUserCredentialsProps>(respose);
    };
};