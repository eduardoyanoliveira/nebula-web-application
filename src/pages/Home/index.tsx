import React from 'react'
import { IQuestion } from '../../application/Domain/Entities/IQuestion';
import useGet from '../../application/CommonHooks/useGet';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import QuestionCard from '../../components/Cards/QuestionCard';
import { Container, Title, QuestionsContainer } from './styles';
import SearchInputComponent from '../../components/Inputs/SearchInput';
import useFilter from '../../application/CommonHooks/useFilter';

const httpGetClient = new HTTPAxiosGetClient(axiosInstance);

function HomePage() {

  const { data: questions, error, isFetching } = useGet<IQuestion[]>(
    httpGetClient, 
    'questions', 
    '',
    {
      staleTime: 60 * 1000
    }
  );

  const openQuestions = questions?.filter(question => question.is_closed === false);

  const { 
    search, 
    setSearch, 
    filteredData 
  } = useFilter<IQuestion>(questions!, 'title');

  return (
    <Container 
      data-testid="form" 
    >
      <SearchInputComponent  
        value={search || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        margin='20px 0'
      />

      {
        search && (
          <QuestionsContainer screenOverflow={filteredData.length > 4}>
            {
              filteredData.map((question) => {
                return (
                  <QuestionCard question={question} key={question.id} />
                )
              })
            }
          </QuestionsContainer>
        )
      }

      {
        (!search && openQuestions) && (
          <>
            <Title data-testid="form-title">
              Perguntas em Aberto:
            </Title>

            <QuestionsContainer>
              {
                openQuestions.map((question) => {
                  return (
                    <QuestionCard question={question} key={question.id} />
                  )
                })
              }
            </QuestionsContainer>
          </>
        )
      }
    </Container>

  )
}

export default HomePage;