import { IAnswer } from "../../Domain/Entities/IAnswer";
import baseQuestion from "../Questions/data";

export const baseAnswer : IAnswer = {
    id: '',
    text: '',
    question_id: '',
    author: null,
    question: baseQuestion
};
