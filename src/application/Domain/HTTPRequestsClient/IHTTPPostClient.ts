import { Result } from "../../Core/Result";
export interface IHTTPResponse {
    [index: string] : any,
    data: any
};

export interface IHTTPPostClient {
    post( url: string,  body: object ): Promise<Result<IHTTPResponse>>
};