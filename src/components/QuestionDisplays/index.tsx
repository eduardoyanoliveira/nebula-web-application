import React from 'react'
import { IQuestion } from '../../application/Domain/Entities/IQuestion';
import { useMediaQuery } from '../../application/hooks/useMediaQuery';
import DesktopQuestionDisplay from './components/DesktopQuestionDisplay';
import MobileQuestionDisplay from './components/MobileQuestionDisplay';

interface IQuestionDisplayProps {
    question : IQuestion,
    fullDisplay?: boolean
};

function QuestionDisplay({ question, fullDisplay } : IQuestionDisplayProps) {
    const isDesktop = useMediaQuery(`(min-width: 650px)`);
    return (
       <>
        {
            isDesktop 
            ? 
                <DesktopQuestionDisplay fullDisplay={fullDisplay} question={question} />
            :
                <MobileQuestionDisplay question={question} />
        }
       </>
    );
};

export default QuestionDisplay;