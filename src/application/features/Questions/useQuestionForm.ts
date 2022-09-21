import { useState } from 'react'
import baseQuestion from './data';
import { IQuestion } from '../../Domain/Entities/IQuestion';

function useQuestionForm() {

    const [current, setCurrent] = useState<IQuestion>(baseQuestion);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {  
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

export default useQuestionForm;