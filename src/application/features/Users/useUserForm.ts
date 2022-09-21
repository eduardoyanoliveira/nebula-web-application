import React, { ChangeEvent, useState } from 'react'
import { IUser } from '../../Domain/Entities/IUser';


import { baseUser } from './data';

interface IEditableUser extends IUser{
  password?: string,
  file: string | File
};

function useUserForm() {

    const [current, setCurrent] = useState<IEditableUser>(baseUser);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    const [url, setUrl] = useState('');

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return;

        const image = e.target.files[0];

        if(!image) return;

        if(image.type === 'image/jpeg' || image.type === 'image/png'){
            setCurrent((prev) => prev = { ...prev, file: image });
            setUrl(URL.createObjectURL(image));
        };
    };

    const getItem = (value: IEditableUser) => {
        setCurrent((prev) => prev = value );
        setUrl(value.photo ? `http://localhost:3333/files/${value.photo}` : '');
    };

    const resetForm = () => {
        setCurrent(baseUser);
        setUrl('');
    };

    return { 

        current, 
        setCurrent, 
        handleChange, 
        url,
        handleFile,
        getItem,
        resetForm,
    };
};

export default useUserForm;