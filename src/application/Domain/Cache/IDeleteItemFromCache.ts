import { Result } from "../../Core/Result";

export interface IDeleteItemFromCache {
    execute(key: string): Result<void>
};