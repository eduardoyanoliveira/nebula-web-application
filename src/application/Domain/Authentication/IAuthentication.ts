import { Result } from "../../Core/Result";
import { IHTTPResponse } from "../HTTPRequestsClient/interfaces";
export interface IAuthentication{
    authenticate(email: string, password: string): Promise<Result<IHTTPResponse>>
};