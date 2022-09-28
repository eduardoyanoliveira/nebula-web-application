import { BestAnswerProvider } from "../../../application/features/BestAnswer/BestAnswerContext";
import { AnswerPageUi } from './ui';

function AnswerPage() {
  return (
    <BestAnswerProvider>
      <AnswerPageUi/>
    </BestAnswerProvider>
  );
};

export default  AnswerPage;