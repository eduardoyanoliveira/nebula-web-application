import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';
import { ButtonColors } from './ButtonColors';

interface IButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  margin?: string,
  maxWidth?: string,
  backgroundColor: ButtonColors
}

/**
 * Creates a button component
 * @param text button's text
 * @param maxWidth if informed, the value will be placed as the max-width of the button
 * @param margin If informed creates a margin on the button
 * @param backgroundColor Button Background color
 * @param allProps inherit all ButtonProps from react button element
 */

const  ButtonComponent : React.FC<IButtonComponentProps> = ({text, ...prev}) => {
  return (
    <Button
      {...prev}
    >
      {text}
    </Button>
  )
}

export default React.memo(ButtonComponent);
