import { ISubject } from "./ISubject"
import { IUser } from "./IUser"

export interface IQuestion {
    id: string,
    title: string,
    text: string,
    subject: ISubject,
    author: IUser,
    is_public: boolean,
    is_closed: boolean,
    created_at: Date,
    updated_at: Date
}