import { Result } from "../../Core/Result";
import { IGetItemFromCache } from "../../Domain/Cache/IGetItemFromCache";
import { IUser } from "../../Domain/Entities/IUser";
import { IGetUserCredentials } from "../../Domain/UserCredentials/IGetUserCredentials";


export class GetUserCredentials implements IGetUserCredentials{

    constructor(
        private GetItemFromCache : IGetItemFromCache<IUser | undefined>
    ){};

    execute(): Result<IUser>{

        const response =  this.GetItemFromCache.execute('@user');
    
        if(response.isFailure){
            return Result.fail<IUser>(response.error);
        };
    
        return  Result.ok<IUser>(JSON.parse(String(response.getValue())) as IUser);
    };
};