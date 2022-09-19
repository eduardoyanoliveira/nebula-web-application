import { BiLike } from 'react-icons/bi';
import { Container, IconContainer, CountCircle } from '../common-styles';

interface ILikeProps {
    onClick?(): void,
    margin?: string
};

function Like({ margin, onClick } : ILikeProps) {
    return (
        <Container margin={margin} onClick={onClick} >
            <IconContainer>
                <BiLike style={{transform: 'rotateY(180deg)'}} />
            </IconContainer>
            <CountCircle>
                5
            </CountCircle>
        </Container>
    );
};

export default Like