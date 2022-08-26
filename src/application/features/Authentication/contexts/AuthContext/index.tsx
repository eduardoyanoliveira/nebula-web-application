import { createContext, ReactNode, useState } from 'react';
import { IUser } from '../../../../Domain/Entities/IUser';
import { ISignIn } from '../../../../Domain/UserCredentials/ISignIn';
import { ISignOut } from '../../../../Domain/UserCredentials/ISignOut';
import { getUserCredentials, signIn, signOut } from '../../../../useCases/UserCredentials';


type AuthContextData = {
    user: IUser | undefined;
    signIn: ISignIn;
    signOut: ISignOut;
};

type AuthProviderProps ={
    children: ReactNode
};




export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children } : AuthProviderProps){

    const [user,] = useState<IUser | undefined >(() => {

        const response = getUserCredentials.execute();

        if(response.isFailure){
            return;
        };

        return response.getValue() as IUser;
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