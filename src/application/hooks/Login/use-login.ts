import { useState, FormEvent } from "react";
import { axiosInstance } from "../../Infra/HTTPClients/Axios/axios-instance";
import { HTTPAxiosPostClient } from "../../Infra/HTTPClients/Axios/http-axios-post-client";

const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance)

export default function useLogin(){

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

    async function onSubmit (e : FormEvent){
        e.preventDefault();

        const result = await httpAxiosPostClient.post('sessions', formData);

        if(result.isFailure){
            console.log(result.error);
        }else{

            console.log(result.getValue());
        };
    };

    return { handleChange, onSubmit };
};