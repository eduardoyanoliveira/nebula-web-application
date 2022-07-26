import { axiosInstance } from "../../../../Infra/axios/axios-instance";
import { HTTPAxiosPostClient } from "../../../../Infra/axios/http-axios-post-client";

type SignInProps ={
    email: string;
    password: string;
};

const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);


export async function signIn({ email, password} : SignInProps){

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