import React, { ChangeEvent, useState } from 'react'
import { IUser } from '../../Domain/Entities/IUser';


import { baseUser } from './data';

interface IEditableUser extends IUser{
  password?: string,
  file: string | File
};

function useUserForm() {

    const [current, setCurrent] = useState<IEditableUser>(baseUser);

    const getItem = (value: IEditableUser) => {
        setCurrent((prev) => prev = value);
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    const toggleActive = (value: boolean) => {
        setCurrent((prev) => prev = { ...prev, is_active: value });
    };

    return { 
        url,
        current, 
        setCurrent, 
        handleFile,
        handleChange, 
        getItem, 
        toggleActive, 
    };
};

export default useUserForm;