import React, { useState } from 'react'
import { ISubject } from '../../Domain/Entities/ISubject';
import { baseSubject } from './data';


function useSubjectForm(subject : ISubject) {

    const [current, setCurrent] = useState<ISubject>(subject || baseSubject);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
        ...current,
        [e.target.name]: e.target.value
        });
    };

    return { 
        current,
        setCurrent,
        handleChange,  
    };
};

export  { useSubjectForm };