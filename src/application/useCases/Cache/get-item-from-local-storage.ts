import { Result } from "../../Core/Result";
import { IGetItemFromCache } from "../../Domain/Cache/IGetItemFromCache";

export class GetItemfromLocalStorage<T> implements IGetItemFromCache<T>{

    execute(key: string): Result<T | string> {
        
        const response = localStorage.getItem(key);

        if(!response){
            return Result.fail<T>('Could not find the key on local storage');
        };

        try{
            return Result.ok<T>(JSON.parse(response));
        }finally{
            return Result.ok<string>(response);
        };
    };
};