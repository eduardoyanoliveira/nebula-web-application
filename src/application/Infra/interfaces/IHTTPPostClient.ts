import { Result } from "../../core/Result";

export interface IHTTPPostClient<Body, Response> {
    post(url: string,  body: Body, headers?:object): Promise<Result<Response>>
};