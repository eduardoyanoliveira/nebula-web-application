import { Result } from "../../Core/Result";
import { IAuthentication } from "../../Domain/Authentication/IAuthentication";
import { IHTTPPostClient, IHTTPResponse } from "../../Domain/HTTPRequestsClient/IHTTPPostClient";

export class RemoteAuthentication implements IAuthentication{

    constructor(
        private url: string,
        private HTTPPostClient: IHTTPPostClient
    ){};

    async authenticate(email: string, password: string): Promise<Result<IHTTPResponse>> {
        
        const response = await this.HTTPPostClient.post(this.url, {
            email,
            password
        });

        if(response.isFailure){
            return Result.fail<IHTTPResponse>(response.error);
        };

        return Result.ok<IHTTPResponse>(response.getValue());
    };
};