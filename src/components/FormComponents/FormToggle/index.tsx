import ToggleInput from '../../Inputs/ToggleInput';
import { Container, Label } from './styles';

interface FormToggleProps {
  id: string,
  toggleLabel: string,
  initialValue?: boolean,
  getValue(value: boolean): void,
  margin?: string
};

const  FormToggle : React.FC<FormToggleProps> = ({ id, toggleLabel, initialValue, getValue, margin }) => {
  return (
    <Container data-testid='container' margin={margin}>
      <Label style={{ margin:'0 20px 0 0' }}> { toggleLabel }</Label>
      <ToggleInput 
        id={id}
        initialValue={initialValue} 
        getValue={getValue}
      />
    </Container>
  );
};

export default FormToggle;