import { useState, FormEvent } from "react";
import { IHTTPPostClient } from "../../Infra/interfaces/IHTTPPostClient";

export interface ILoginRequestProps{
    email: string,
    password: string
};

export default async function useLogin(HTTPPostClient: IHTTPPostClient<ILoginRequestProps, Response>){

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    async function handleSubmit (e : FormEvent){
        e.preventDefault();

        const result = await HTTPPostClient.post('sessions', formData);

        if(result.isFailure){
            console.log(result.error);
        }else{

            console.log(result.getValue());
        };
    };

    return { handleChange, handleSubmit };
};