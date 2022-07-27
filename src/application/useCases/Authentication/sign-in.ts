import { Result } from "../../Core/Result";
import { ISignIn, SignInProps } from "../../Domain/Authentication/ISignIn";
import { ISaveItemOnCache } from "../../Domain/Cache/ISaveItemOnCache";
import { RemoteAuthentication } from './remote-authentication'

interface UserProps  {
    user_id: string,
    name: string,
    email: string,
};


export class SignIn implements ISignIn {
    constructor(
        private RemoteAuthentication: RemoteAuthentication,
        private SaveItemOnCache: ISaveItemOnCache<UserProps>
    ){};

    async execute({ email, password } : SignInProps) : Promise<Result<void>> {

        const response = await this.RemoteAuthentication.authenticate(
            email,
            password
        );

        if(response.isFailure){
            return Result.fail(response.error);
        };

        const { token, ...rest } =  response.getValue().data;

        this.SaveItemOnCache.execute('@token', token);
        this.SaveItemOnCache.execute('@user', rest);
        

        return Result.ok();
   
    };
};
 