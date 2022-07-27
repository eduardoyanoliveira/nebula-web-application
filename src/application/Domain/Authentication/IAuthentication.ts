import { Result } from "../../Core/Result";
import { IHTTPResponse } from "../HTTPRequestsClient/IHTTPPostClient";
export interface IUserCredentialsProps {
    id: string,
    username: string,
    email: string,
    token: string,
};

export interface IAuthentication{
    authenticate(email: string, password: string): Promise<Result<IHTTPResponse>>
};