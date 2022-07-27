import { useState, FormEvent } from "react";
import { ISignIn } from "../../../Domain/Authentication/ISignIn";

interface ILoginReturnProps {
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void,
    onSubmit(e : FormEvent): Promise<void>
};


export default function  LoginComponent(signIn : ISignIn) : ILoginReturnProps{

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

        await signIn.execute(formData);
    };

    return { handleChange, onSubmit };
};