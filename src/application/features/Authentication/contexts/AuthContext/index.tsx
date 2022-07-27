import { createContext, ReactNode, useState } from 'react';
import { axiosInstance } from '../../../../Infra/axios/axios-instance';
import { HTTPAxiosPostClient } from '../../../../Infra/axios/http-axios-post-client';
import { RemoteAuthentication } from '../../../../useCases/Authentication/remote-authentication';
import { DeleteItemFromLocalStorage } from '../../../../useCases/Cache/delete-from-local-storage';
import { GetItemfromLocalStorage } from '../../../../useCases/Cache/get-item-from-local-storage';
import { SaveItemOnLocalStorage } from '../../../../useCases/Cache/save-item-on-local-storage';
import { ISignIn } from '../../../../Domain/Authentication/ISignIn';
import { ISignOut } from '../../../../Domain/Authentication/ISignOut';
import { SignIn } from '../../../../useCases/Authentication/sign-in';
import { SignOut } from '../../../../useCases/Authentication/sign-out';

type AuthContextData = {
    user: IUserProps | undefined;
    signIn: ISignIn;
    signOut: ISignOut;
};

type IUserProps = {
    id: string;
    name: string;
    email: string;
};

type AuthProviderProps ={
    children: ReactNode
};


export const AuthContext = createContext({} as AuthContextData);


const deleteItemFromLocalStorage = new DeleteItemFromLocalStorage();
const saveItemOnLocalStorage = new SaveItemOnLocalStorage();
const getItemFromLocalStorage = new GetItemfromLocalStorage<IUserProps>(); 

const signOut = new SignOut(deleteItemFromLocalStorage);


const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);

const authenticate = new  RemoteAuthentication('sessions', httpAxiosPostClient);

const signIn = new SignIn( authenticate, saveItemOnLocalStorage);

export function AuthProvider({ children } : AuthProviderProps){

    const [user, setUser] = useState<IUserProps | undefined >(() => {
        const response = getItemFromLocalStorage.execute('@user');

        if(response.isFailure){
            return;
        };

        return response.getValue() as IUserProps;
    });

    return(
        <AuthContext.Provider value={
            {   
                user,
                signIn,
                signOut 
            }
        }>
            {children}
        </AuthContext.Provider>
    );
};