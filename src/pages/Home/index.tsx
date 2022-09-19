import React from 'react'
import ListQuestios from '../../application/features/Questions/components/list-questions';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import QuestionCard from '../../components/Cards/QuestionCard';
import { Container, Title, QuestionsContainer } from './styles';


const httpGetClient = new HTTPAxiosGetClient(axiosInstance);

function HomePage() {

  const { questions, error, isFetching } = ListQuestios(httpGetClient, 'is_closed=false');

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