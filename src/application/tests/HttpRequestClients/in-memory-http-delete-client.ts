import { Result } from "../../Core/Result";
import { IHTTPDeleteClient } from "../../Domain/HTTPRequestsClient/IHTTPDeleteClient";

interface IItemProps {
    id?: string
    [index: string]: any
};

interface Response {
    data: any
}

export class InMemoryHTTPDeleteClient implements IHTTPDeleteClient{

    public data : IItemProps[] = [];

    public url: string = '';

    async delete(url: string, id: string): Promise<Result<Response>> {
        
        if(url !== this.url){
            return Result.fail<Response>('Wrong url pattern');
        };

        const index = this.data.findIndex(i => i.id === id);

        if(index < 0){
            return Result.fail('Id is not valid');
        };

        const item = this.data[index];

        this.data.splice(index, 1);

        return Result.ok<Response>({ data: item });
    };
};