import { Result } from "../../Core/Result";
import { IHTTPGetClient } from "../../Domain/HTTPRequestsClient/IHTTPGetClient";


interface Response {
    data: any
}

export class InMemoryHTTPGetClient implements IHTTPGetClient{

    public data : object[] = [];

    public url: string = '';

    async get(url: string): Promise<Result<Response>> {
        
        if(url !== this.url){
            return Result.fail<Response>('Wrong url pattern');
        };

        return Result.ok<Response>({ data: this.data });
    };
};