import { IQuestion } from "./IQuestion";
import { IUser } from "./IUser";

export interface IAnswer  {
    id?: string,
    text: string,
    author: IUser | null,
    question: IQuestion,
    question_id?: string,
    created_at?: Date,
    updated_at?: Date
}