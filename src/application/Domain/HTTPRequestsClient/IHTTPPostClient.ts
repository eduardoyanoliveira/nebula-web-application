import { Result } from "../../Core/Result";

export interface IHTTPPostClient<Response> {
    post( url: string,  body: object ): Promise<Result<Response>>
};