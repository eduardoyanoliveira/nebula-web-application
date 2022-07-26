import { Result } from "../../Core/Result";
import { IDeleteItemFromCache } from "../../Domain/Cache/IDeleteItemFromCache";


export class DeleteItemFromLocalStorage implements IDeleteItemFromCache{

    execute(key: string): Result<void> {
        
        try{
            localStorage.removeItem(key);

            return Result.ok();
        }catch{
            return Result.fail('Could not remove the item from local storage');
        };
    };
};