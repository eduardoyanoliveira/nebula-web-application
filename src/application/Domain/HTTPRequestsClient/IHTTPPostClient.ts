import { Result } from "../../Core/Result";
import { IHTTPResponse } from "./interfaces";

export interface IHTTPPostClient {
    post( url: string,  body: object ): Promise<Result<IHTTPResponse>>
};