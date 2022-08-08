import { Result } from "../../Core/Result";
import { IHTTPPatchClient } from "../../Domain/HTTPRequestsClient/IHTTPPatchClient";


interface Response {
    data: any
};

export class InMemoryHTTPPatchClient implements IHTTPPatchClient{

    public data : object[] = [];

    public url: string = '';

    async patch(url: string, body: object): Promise<Result<Response>> {
        
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