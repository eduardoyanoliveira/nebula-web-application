import { Result } from "../../Core/Result";
import { IGetItemFromCache } from "../../Domain/Cache/IGetItemFromCache";
import { IGetToken } from "../../Domain/Token/IGetToken";

export class GetTokenFromCache implements IGetToken{

    constructor(
        private GetItemFromCache: IGetItemFromCache<string>,
        private key: string
    ){};

    execute(): Result<string> {
        
        const response = this.GetItemFromCache.execute(this.key);

        if(response.isFailure){
            return Result.fail<string>(response.error);
        };

        return Result.ok<string>(response.getValue());
    };
};