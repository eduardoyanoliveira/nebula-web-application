import { createContext, ReactNode, useState } from 'react';
import { axiosInstance } from '../../../../Infra/axios/axios-instance';
import { HTTPAxiosPostClient } from '../../../../Infra/axios/http-axios-post-client';
import { RemoteAuthentication } from '../../../../useCases/Authentication/remote-authentication';
import { DeleteItemFromLocalStorage } from '../../../../useCases/Cache/delete-from-local-storage';
import { GetItemfromLocalStorage } from '../../../../useCases/Cache/get-item-from-local-storage';
import { SaveItemOnLocalStorage } from '../../../../useCases/Cache/save-item-on-local-storage';
import { ISignIn } from '../../../../Domain/UserCredentials/ISignIn';
import { ISignOut } from '../../../../Domain/UserCredentials/ISignOut';
import { SignIn } from '../../../../useCases/UserCredentials/sign-in';
import { SignOut } from '../../../../useCases/UserCredentials/sign-out';
import { GetUserCredentials } from '../../../../useCases/UserCredentials/get-user-credentials';
import { IUserCredentialsProps } from '../../../../Domain/UserCredentials/IGetUserCredentials';

interface IUserProps extends Omit<IUserCredentialsProps, 'token'> {}

type AuthContextData = {
    user: IUserCredentialsProps | undefined;
    signIn: ISignIn;
    signOut: ISignOut;
};

type AuthProviderProps ={
    children: ReactNode
};


const deleteItemFromLocalStorage = new DeleteItemFromLocalStorage();
const signOut = new SignOut(deleteItemFromLocalStorage);

const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);
const authenticate = new  RemoteAuthentication('sessions', httpAxiosPostClient);
const saveItemOnLocalStorage = new SaveItemOnLocalStorage();
const signIn = new SignIn( authenticate, saveItemOnLocalStorage);

const getItemFromLocalStorage = new GetItemfromLocalStorage< IUserCredentialsProps | undefined>(); 
const getUserCredentials = new GetUserCredentials(getItemFromLocalStorage);


export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children } : AuthProviderProps){

    const [user,] = useState<IUserCredentialsProps | undefined >(() => {

        const response = getUserCredentials.execute();

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