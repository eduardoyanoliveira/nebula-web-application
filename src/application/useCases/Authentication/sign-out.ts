import { ISignOut } from "../../Domain/Authentication/ISignOut";
import { IDeleteItemFromCache } from "../../Domain/Cache/IDeleteItemFromCache";

export class SignOut implements ISignOut{
    constructor(
        private DeleteItemFromCache: IDeleteItemFromCache
    ){};

    async execute(){

        try{
            
            this.DeleteItemFromCache.execute('@token');
            this.DeleteItemFromCache.execute('@user');

        }catch{
            console.log('Logout Error');
        };
    };
};
 