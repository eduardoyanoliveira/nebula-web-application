import { BiLike } from 'react-icons/bi';
import { Container, IconContainer, CountCircle } from '../common-styles';

interface ILikeProps {
    onClick?(): void,
    margin?: string,
    likeAmount: number,
    isActive: boolean
};

function Like({ margin, likeAmount, isActive, onClick } : ILikeProps) {
    return (
        <Container margin={margin} onClick={onClick} >
            <IconContainer selected={isActive}>
                <BiLike style={{transform: 'rotateY(180deg)'}} />
            </IconContainer>
            <CountCircle>
                {likeAmount}
            </CountCircle>
        </Container>
    );
};

export default Like