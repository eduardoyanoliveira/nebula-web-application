import { Result } from "../../Core/Result";

export interface IUserCredentialsProps {
    id: string,
    username: string,
    role: string,
    email: string,
};

export interface IGetUserCredentials{
    execute(): Result<IUserCredentialsProps>
};