import { ButtonHTMLAttributes, ReactElement } from "react";
import { ButtonColors } from "../Button/ButtonColors";
import { Button } from "../Button/styles";

interface IButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactElement,
    margin?: string,
    maxWidth?: string,
    backgroundColor: ButtonColors
};
  
/**
 * Creates a button component
 * @param icon button's icon
 * @param maxWidth if informed, the value will be placed as the max-width of the button
 * @param margin If informed creates a margin on the button
 * @param backgroundColor Button Background color
 * @param allProps inherit all ButtonProps from react button element
 */
function IconButton({ icon, ...prev } : IButtonComponentProps) {
  return (
    <Button {...prev}>
        {icon}
    </Button>
  );
};

export default IconButton;