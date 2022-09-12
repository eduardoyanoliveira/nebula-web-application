import { IAnswer } from '../../../application/Domain/Entities/IAnswer';
import { useMediaQuery } from '../../../application/hooks/useMediaQuery';
import DesktopAnswerCard from './components/Desktop';
import MobileAnswerCard from './components/Mobile';

interface IAnswerCardProps {
    answer : IAnswer,
};

function AnswerCard({ answer } : IAnswerCardProps) {
    const isDesktop = useMediaQuery(`(min-width: 650px)`);
    return (
       <>
        {
            isDesktop 
            ? 
                <DesktopAnswerCard answer={answer} />
            :
                <MobileAnswerCard answer={answer} />
        }
       </>
    );
};

export default AnswerCard;