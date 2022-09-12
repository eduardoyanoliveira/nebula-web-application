import { IQuestion } from '../../../application/Domain/Entities/IQuestion';
import { useMediaQuery } from '../../../application/hooks/useMediaQuery';
import DesktopQuestionItemCard from './components/Desktop';
import MobileQuestionItemCard from './components/Mobile';

interface IQuestionItemCardProps {
    question : IQuestion,
};

function QuestionItemCard({ question } : IQuestionItemCardProps) {
    const isDesktop = useMediaQuery(`(min-width: 650px)`);
    return (
       <>
        {
            isDesktop 
            ? 
                <DesktopQuestionItemCard question={question} />
            :
                <MobileQuestionItemCard question={question} />
        }
       </>
    );
};

export default QuestionItemCard;