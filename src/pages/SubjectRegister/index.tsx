import { useState } from "react";
import { useParams } from "react-router-dom";
import { ISubject } from "../../application/Domain/Entities/ISubject";
import { useStaleWhileRevalidate } from "../../application/hooks/useStaleWhileRevalidate";
import { axiosInstance } from "../../application/Infra/axios/axios-instance";
import { HTTPAxiosGetClient } from "../../application/Infra/axios/http-axios-get-client";
import AutoComplete from "../../components/AutoComplete";
import Button from "../../components/Buttons/Button";
import { ButtonColors } from "../../components/Buttons/Button/ButtonColors";
import FormContainer from "../../components/Form/Contianer";
import { Header } from "./styles";

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);

function SubjectsRegisterPage() {
  
  const { data, isFetching, error } = useStaleWhileRevalidate<ISubject[]>('subjects', httpAxiosGetClient, 10);
  const [current, setCurrent] = useState<ISubject | undefined | null>(null);

  const params = useParams();

  const getItem = (value: ISubject) => {
    setCurrent((prev) => prev = value);
  };

  console.log(current)

  return (
    <FormContainer title="Cadastro de Tópicos">
      <Header>
        <AutoComplete 
          name="subjects" 
          margin='0 25px 0 0' 
          data={data || []} 
          fieldToDisplay='name'
          getItem={getItem}
        />
        <Button text="Novo" backgroundColor={ButtonColors.primary} maxWidth={'30%'}/>
      </Header>
      <h1 style={{color: '#fff'}}>{current?.name || 'not selected'}</h1>
    </FormContainer>
  )
}

export default SubjectsRegisterPage;