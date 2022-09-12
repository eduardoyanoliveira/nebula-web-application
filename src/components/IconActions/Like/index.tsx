import { BiLike } from 'react-icons/bi';
import { Container, IconContainer, CountCircle } from '../common-styles';

function Like() {
    return (
        <Container>
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