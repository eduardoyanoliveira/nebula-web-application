import { Result } from "../../Core/Result";
import { IHTTPResponse } from "./interfaces";

export interface IHTTPPatchClient {
    patch( url: string,  body: object ): Promise<Result<IHTTPResponse>>
};