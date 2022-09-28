import { IQuestion } from '../../../application/Domain/Entities/IQuestion';
import { handleSubmit } from '../../../application/CommonHooks/Submit';
import  { baseQuestionProps } from '../../../application/features/Questions/data';
import { httpAxiosPatchClient, httpAxiosPostClient } from '../../../application/Infra/axios';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import AnswerCard from '../../../components/Cards/AnswerCard';
import QuestionCard from '../../../components/Cards/QuestionCard';
import FormContainer from '../../../components/FormComponents/FormContainer';
import TextBox from '../../../components/Inputs/TextBox';
import { MainContainer, Container, Title } from './styles';
import { useAnswer } from '../../../application/features/Answers/useAnswer';



export function AnswerPageUi() {

    const {
        question,
        answers,
        current,
        handleAnswerChange
    } = useAnswer({});

    return (
        <MainContainer>
            <QuestionCard fullDisplay question={question as IQuestion || baseQuestionProps}/>
            <Container>
                <Title>Respostas:</Title>
                    {
                        answers?.map((answer) => {
                            return (
                                <AnswerCard 
                                    answer={answer} 
                                    key={answer.id}
                                />
                            )
                        })
                    }
                <FormContainer>
                    <TextBox name='text' onChange={handleAnswerChange}/>
                </FormContainer>
                <FormContainer>
                    <Button 
                        text='Responder' 
                        backgroundColor={ButtonColors.primaryGradient} 
                        onClick={(e) => handleSubmit(e, { 
                            url: 'answers', 
                            item: current, 
                            httpPostClient: httpAxiosPostClient, 
                            httpPatchClient: httpAxiosPatchClient 
                        })}
                    />
                </FormContainer>
            </Container>
        </MainContainer>
    );
};


