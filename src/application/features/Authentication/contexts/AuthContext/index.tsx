import { createContext, ReactNode, useState } from 'react';
import { signIn } from './sign-in';
import { signOut } from './sign-out';

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
};

type UserProps = {
    id: string;
    name: string;
    email: string;
};

type SignInProps ={
    email: string;
    password: string;
};

type AuthProviderProps ={
    children: ReactNode
};

export const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({ children } : AuthProviderProps){
    const [user, setUser] = useState<UserProps>();

    const isAuthenticated = !! user;

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};