import { Result } from "../../Core/Result";
import { IDeleteItemFromCache } from "../../Domain/Cache/IDeleteItemFromCache";
import { IRemoveToken } from "../../Domain/Token/IRemoveToken";

export class RemoveTokenFromCache implements IRemoveToken{

    constructor(
        private DeleteItemFromCache: IDeleteItemFromCache,
        private key: string
    ){};

    execute(): Result<void> {
        
        const response = this.DeleteItemFromCache.execute(this.key);

        if(response.isFailure){
            return Result.fail<void>(response.error);
        };

        return Result.ok<void>();
    };
};