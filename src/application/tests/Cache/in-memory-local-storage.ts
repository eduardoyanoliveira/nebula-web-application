import { Result } from "../../Core/Result";
import { IDeleteItemFromCache } from "../../Domain/Cache/IDeleteItemFromCache";
import { IGetItemFromCache } from "../../Domain/Cache/IGetItemFromCache";
import { ISaveItemOnCache } from "../../Domain/Cache/ISaveItemOnCache";

export const inMemoryLocalStorage: object = {};

export class InMemorySaveItemOnLocalStorage<T> implements ISaveItemOnCache<T>{
    execute(key: string, item: T | string){

        (inMemoryLocalStorage as any)[key] = item;

        return Result.ok<void>();
    };
};


export class InMemoryDeleteItemFromLocalStorage implements IDeleteItemFromCache{
    
    execute(key: string): Result<void> {

        if(!(inMemoryLocalStorage as any)[key]){
            return Result.fail<void>('Could not find the value on the cache by the given key');
        };

        delete (inMemoryLocalStorage as any)[key];

        return Result.ok<void>();
    };
};


export class InMemoryGetItemFromLocalStorage<T> implements IGetItemFromCache<T>{
    execute(key: string) {

        if(!(inMemoryLocalStorage as any)[key]){
            return Result.fail<T>('Could not find the value on the cache by the given key');
        };

        try{
            return Result.ok<T>(JSON.parse((inMemoryLocalStorage as any)[key]));
        }finally{
            return Result.ok<string>((inMemoryLocalStorage as any)[key]);
        };
    };
};