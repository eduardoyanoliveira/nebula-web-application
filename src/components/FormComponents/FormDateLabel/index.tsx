import { Label } from './styles';

interface FormDateLabelProps {
  dateLabel: string,
  date: string,
  margin?: string,
};

const  FormDateLabel : React.FC<FormDateLabelProps> = ({ dateLabel, date,  margin }) => {
  return (
    <Label data-testid="label"  margin={margin}>
      <p data-testid={'label-p'}>{dateLabel}: {date}</p>
    </Label>
  );
};

export default FormDateLabel;