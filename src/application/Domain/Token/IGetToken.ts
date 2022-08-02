import { Result } from "../../Core/Result";

export interface IGetToken {
    execute(): Result<string>
};