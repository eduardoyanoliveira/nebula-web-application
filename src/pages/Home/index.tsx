import React from 'react'
import ListQuestios from '../../application/features/Questions/components/list-questions';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import Form from '../../components/FormComponents/Form';
import QuestionDisplay from '../../components/QuestionDisplays';


const httpGetClient = new HTTPAxiosGetClient(axiosInstance);

function HomePage() {

  const { questions, error, isFetching } = ListQuestios(httpGetClient);

  console.log(questions)

  return (
    <Form title={'Perguntas em Aberto'}>
      {
        questions?.map((question) => {
          return (
           <QuestionDisplay question={question} key={question.id} />
          )
        })
      }
    </Form>
  )
}

export default HomePage;