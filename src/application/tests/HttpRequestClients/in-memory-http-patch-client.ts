import { Result } from "../../Core/Result";
import { IHTTPPatchClient } from "../../Domain/HTTPRequestsClient/IHTTPPatchClient";

interface IItemProps {
    id?: string
    [index: string]: any
};

interface Response {
    data: any
};

export class InMemoryHTTPPatchClient implements IHTTPPatchClient{

    public data : IItemProps[] = [];

    public url: string = '';

    async patch(url: string, body: IItemProps): Promise<Result<Response>> {
        
        if(url !== this.url){
            return Result.fail<Response>('Wrong url pattern');
        };

        const index = this.data.findIndex(i => i.id === body.id);

        if(index < 0){
            return Result.fail('Id is not valid');
        };

        this.data[index] = body;

        const respose : Response = {
            data: this.data[index]
        };

        return Result.ok<Response>(respose);
    };
};