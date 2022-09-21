import { IUser } from "../../Domain/Entities/IUser";

export interface IEditableUser extends IUser{
    password?: string,
    file: string | File
};