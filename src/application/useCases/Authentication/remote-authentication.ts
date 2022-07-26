import { Result } from "../../Core/Result";
import { IAuthentication, IUserCredentialsProps } from "../../Domain/Authentication/IAuthentication";
import { IHTTPPostClient } from "../../Domain/HTTPRequestsClient/IHTTPPostClient";

export class RemoteAuthentication implements IAuthentication{

    constructor(
        private url: string,
        private HTTPPostClient: IHTTPPostClient<IUserCredentialsProps>
    ){};

    async authenticate(email: string, password: string): Promise<Result<IUserCredentialsProps>> {
        
        const response = await this.HTTPPostClient.post(this.url, {
            email,
            password
        });

        if(response.isFailure){
            return Result.fail<IUserCredentialsProps>(response.error);
        };

        return Result.ok<IUserCredentialsProps>(response.getValue());
    };
};