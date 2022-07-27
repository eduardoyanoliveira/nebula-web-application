import { Result } from "../../Core/Result";

export interface ISignOut {
    execute(): Promise<Result<void>>
};
