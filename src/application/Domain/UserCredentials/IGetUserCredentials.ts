import { Result } from "../../Core/Result";

export interface IUserCredentialsProps {
    id: string,
    username: string,
    email: string,
};

export interface IGetUserCredentials{
    execute(): Result<IUserCredentialsProps>
};