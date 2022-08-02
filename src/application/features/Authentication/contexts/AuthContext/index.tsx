import { createContext, ReactNode, useState } from 'react';
import { IUserCredentialsProps } from '../../../../Domain/UserCredentials/IGetUserCredentials';
import { ISignIn } from '../../../../Domain/UserCredentials/ISignIn';
import { ISignOut } from '../../../../Domain/UserCredentials/ISignOut';
import { getUserCredentials, signIn, signOut } from '../../../../useCases/UserCredentials';

interface IUserProps extends Omit<IUserCredentialsProps, 'token'> {}

type AuthContextData = {
    user: IUserCredentialsProps | undefined;
    signIn: ISignIn;
    signOut: ISignOut;
};

type AuthProviderProps ={
    children: ReactNode
};




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