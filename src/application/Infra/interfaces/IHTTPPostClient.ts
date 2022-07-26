import { Result } from "../../core/Result";

export interface IHTTPPostClient<Body, Response> {
    post( url: string,  body: Body ): Promise<Result<Response>>
};