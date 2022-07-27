import { Result } from "../../Core/Result";
import { IGetItemFromCache } from "../../Domain/Cache/IGetItemFromCache";
import { IGetUserCredentials, IUserCredentialsProps } from "../../Domain/UserCredentials/IGetUserCredentials";


export class GetUserCredentials implements IGetUserCredentials{

    constructor(
        private GetItemFromCache : IGetItemFromCache<IUserCredentialsProps | undefined>
    ){};

    execute(): Result<IUserCredentialsProps>{

        const response =  this.GetItemFromCache.execute('@user');
    
        if(response.isFailure){
            return Result.fail<IUserCredentialsProps>(response.error);
        };
    
        return  Result.ok<IUserCredentialsProps>(response.getValue() as IUserCredentialsProps);
    };
};