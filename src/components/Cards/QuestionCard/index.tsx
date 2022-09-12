import { IQuestion } from '../../../application/Domain/Entities/IQuestion';
import { useMediaQuery } from '../../../application/hooks/useMediaQuery';
import DesktopQuestionCard from './components/Desktop';
import MobileQuestionCard from './components/Mobile';

interface IQuestionCardProps {
    question : IQuestion,
};

function QuestionCard({ question } : IQuestionCardProps) {
    const isDesktop = useMediaQuery(`(min-width: 650px)`);
    return (
       <>
        {
            isDesktop 
            ? 
                <DesktopQuestionCard question={question} />
            :
                <MobileQuestionCard question={question} />
        }
       </>
    );
};

export default QuestionCard;