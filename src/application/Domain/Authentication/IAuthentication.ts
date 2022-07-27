import { Result } from "../../Core/Result";
import { IHTTPResponse } from "../HTTPRequestsClient/IHTTPPostClient";
export interface IAuthentication{
    authenticate(email: string, password: string): Promise<Result<IHTTPResponse>>
};