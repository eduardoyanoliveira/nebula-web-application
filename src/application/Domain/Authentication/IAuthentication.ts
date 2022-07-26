import { Result } from "../../Core/Result";

export interface IUserCredentialsProps {
    id: string,
    username: string,
    email: string,
    token: string,
};

export interface IAuthentication {
    authenticate(email: string, password: string): Promise<Result<IUserCredentialsProps>>
};