import { Result } from "../../Core/Result";

export interface ISaveItemOnCache<T>{
    execute(key: string, item: T | string): Result<void>
};