import { Result } from "../../Core/Result";
import { IHTTPPostClient } from "../../Domain/HTTPRequestsClient/IHTTPPostClient";


interface Response {
    data: any
}

export class InMemoryHTTPPostClient implements IHTTPPostClient{

    public data : object[] = [];

    public url: string = '';

    async post(url: string, body: object): Promise<Result<Response>> {
        
        if(url !== this.url){
            return Result.fail<Response>('Wrong url pattern');
        };

        this.data.push({...body});

        const respose : Response = {
            data:{ ...body }
        };

        return Result.ok<Response>(respose);
    };
};