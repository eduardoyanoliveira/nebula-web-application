import { ISignOut } from "../../Domain/UserCredentials/ISignOut";
import { IDeleteItemFromCache } from "../../Domain/Cache/IDeleteItemFromCache";
import { Result } from "../../Core/Result";

export class SignOut implements ISignOut{
    constructor(
        private DeleteItemFromCache: IDeleteItemFromCache
    ){};

    async execute(){

        const tokenDeletionResponse = this.DeleteItemFromCache.execute('@token');

        if(tokenDeletionResponse.isFailure){
            return Result.fail<void>('Could not delete token');
        };

        const userDeletionResponse =  this.DeleteItemFromCache.execute('@user');

        if(userDeletionResponse.isFailure){
            return Result.fail<void>('Could not delete user');
        };

        return Result.ok<void>();
    };
};
 