import { createContext, ReactNode, useState } from 'react';
import { axiosInstance } from '../Infra/HTTPClients/Axios/axios-instance';
import { HTTPAxiosPostClient } from '../Infra/HTTPClients/Axios/http-axios-post-client';

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

const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);

export function signOut(){

    try{
        localStorage.removeItem('token');
    }catch{
        console.log('Erro ao deslogar')
    };
};

async function signIn({ email, password} : SignInProps){

    try{
        const response = await httpAxiosPostClient.post('/sessions',{
            email,
            password
        });

        if(response.isFailure){
            console.log(response.error);
        }else{

            const { token } =  response.getValue().data;

            localStorage.setItem('token', token);
        };

    }catch(err){
        console.log('Erro', err);
    };
};

export function AuthProvider({ children } : AuthProviderProps){
    const [user, setUser] = useState<UserProps>();

    const isAuthenticated = !! user;

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};