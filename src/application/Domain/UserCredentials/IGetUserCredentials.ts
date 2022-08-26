import { Result } from "../../Core/Result";
import { IUser } from "../Entities/IUser";
export interface IGetUserCredentials{
    execute(): Result<IUser>
};