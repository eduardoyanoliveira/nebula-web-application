import { Result } from "../../Core/Result";
import { IHTTPPostClient } from "../../Domain/HTTPRequestsClient/IHTTPPostClient";

interface IUserProps{
    username: string,
    email: string,
    password: string
};

interface IAuthenticationRequestProps {
    email: string,
    password: string
};

interface Response {
    data: any
};

export class InMemoryPostAuthentication implements IHTTPPostClient{

    public users : IUserProps[] = [];

    public url: string = 'sessions';

    async post(url: string, body: IAuthenticationRequestProps ): Promise<Result<Response>> {
        
        if(url !== this.url){
            return Result.fail<Response>('Wrong url pattern');
        };

        const user = this.users.find(item => item.email === body.email && item.password === body.password);

        if(!user){
            return Result.fail<Response>('Wrong user credentials');
        };

        const respose : Response = {
            data:{ 
                ...user,
                token: 'afsdtf9w03i4r90wdjad-200-w9-=ag0-ds9fh='
            }
        };

        return Result.ok<Response>(respose);
    };
};