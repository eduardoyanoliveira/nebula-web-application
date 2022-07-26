import { Result } from "../../Core/Result";
import { ISaveItemOnCache } from "../../Domain/Cache/ISaveItemOnCache";

export class SaveItemOnLocalStorage<T> implements ISaveItemOnCache<T>{

    execute(key: string, item: T | string): Result<void> {

        try{
            localStorage.setItem(key, JSON.stringify(item));

            return Result.ok();
        }catch{
            return Result.fail('Could not save item on local storage due an unexpected error');
        };
 
    };
};