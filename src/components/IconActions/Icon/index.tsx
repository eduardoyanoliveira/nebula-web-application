import { IconContainer } from '../common-styles';
import { ThisIconContainer } from './styles';
import { ReactNode } from 'react';

interface IIconProps {
    icon: ReactNode,
    selected?: boolean,
    onClick?(): void,
    margin?: string
};

function Icon({ selected, margin, icon, onClick } : IIconProps) {
    return (
        <ThisIconContainer margin={margin} onClick={onClick}>
            <IconContainer selected={selected} >
                {icon}
            </IconContainer>
        </ThisIconContainer>
    );
};

export default Icon;
