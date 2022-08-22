import { Label } from './styles';

interface FormDateLabelProps {
    dateLabel: string,
    date: string,
    margin?: string,
};

const  FormDateLabel : React.FC<FormDateLabelProps> = ({ dateLabel, date,  margin }) => {
  return (
    <Label margin={margin}>
        <>{dateLabel}: {date}</>
    </Label>
  );
};

export default FormDateLabel;