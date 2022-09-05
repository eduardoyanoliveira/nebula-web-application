import React from 'react'
import { IQuestion } from '../../application/Domain/Entities/IQuestion';
import { useMediaQuery } from '../../application/hooks/useMediaQuery';
import DesktopQuestionDisplay from './components/DesktopQuestionDisplay';
import MobileQuestionDisplay from './components/MobileQuestionDisplay';

interface IQuestionDisplayProps {
    question : IQuestion
};

function QuestionDisplay({ question } : IQuestionDisplayProps) {
    const isDesktop = useMediaQuery(`(min-width: 650px)`);
    return (
       <>
        {
            isDesktop 
            ? 
                <DesktopQuestionDisplay question={question} />
            :
                <MobileQuestionDisplay question={question} />
        }
       </>
    );
};

export default QuestionDisplay;