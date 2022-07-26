import { useState, FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface IUseLoginReturnProps {
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void,
    onSubmit(e : FormEvent): Promise<void>
};


export default function  LoginComponent() : IUseLoginReturnProps{

    const { signIn } = useContext(AuthContext);

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

        await signIn(formData);
    };

    return { handleChange, onSubmit };
};