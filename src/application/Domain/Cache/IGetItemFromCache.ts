import { Result } from "../../Core/Result";

export interface IGetItemFromCache<T>{
    execute(key: string): Result<T | string>
};