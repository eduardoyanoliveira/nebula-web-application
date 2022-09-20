import React from 'react'
import { IQuestion } from '../../application/Domain/Entities/IQuestion';
import useGet from '../../application/CommonHooks/useGet';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import QuestionCard from '../../components/Cards/QuestionCard';
import { Container, Title, QuestionsContainer } from './styles';


const httpGetClient = new HTTPAxiosGetClient(axiosInstance);

function HomePage() {

  const { data: questions, error, isFetching } = useGet<IQuestion[]>(
    httpGetClient, 
    'questions', 
    'is_closed=false',
    {
      staleTime: 60 * 1000
    }
  );

  return (
    <Container 
      data-testid="form" 
    >
      <Title data-testid="form-title">
        Perguntas em Aberto:
      </Title>
      {
        questions && (
          <QuestionsContainer screenOverflow={questions.length > 4}>
            {
              questions.map((question) => {
                return (
                  <QuestionCard question={question} key={question.id} />
                )
              })
            }
          </QuestionsContainer>
        )
      }
      
    </Container>

  )
}

export default HomePage;