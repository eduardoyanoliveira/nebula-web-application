import { Result } from "../../Core/Result";

export interface IUserCredentialsProps {
    user_id: string,
    username: string,
    role: string,
    email: string,
};

export interface IGetUserCredentials{
    execute(): Result<IUserCredentialsProps>
};