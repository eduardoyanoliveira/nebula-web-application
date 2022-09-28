import { IconContainer } from '../common-styles';
import { ThisIconContainer } from './styles';
import { FormEvent, ReactNode } from 'react';

interface IIconProps {
    icon: ReactNode,
    selected?: boolean,
    onClick?(e?: FormEvent): void,
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
