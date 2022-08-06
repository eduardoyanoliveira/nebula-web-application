import { useEffect, useState } from "react";
import { ISubject } from "../../application/Domain/Entities/ISubject";
import { useStaleWhileRevalidate } from "../../application/hooks/useStaleWhileRevalidate";
import { axiosInstance } from "../../application/Infra/axios/axios-instance";
import { HTTPAxiosGetClient } from "../../application/Infra/axios/http-axios-get-client";
import AutoComplete from "../../components/AutoComplete";
import { IAutoCompleteData } from "../../components/AutoComplete/interfaces/autocomplete-data-interfaces";
import Button from "../../components/Buttons/Button";
import { ButtonColors } from "../../components/Buttons/Button/ButtonColors";
import FormContainer from "../../components/Form/Contianer";
import { Header } from "./styles";

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);

function SubjectsRegisterPage() {
  
  const { data, isFetching, error } = useStaleWhileRevalidate<ISubject[]>('subjects', httpAxiosGetClient, 10);
  const [subjects, setSubjects] = useState<IAutoCompleteData[]>([]);


  useEffect(() => {
    setSubjects([]);
    data?.forEach((subject : ISubject) => {
      setSubjects((prev) => [
        ...prev,
        {
          id: subject.id as string,
          name: subject.name
        }
      ]);
    });
  }, [data]);

  const getItem = () => {

  }

  return (
    <FormContainer title="Cadastro de Tópicos">
      <Header>
        <AutoComplete name="subjects" margin='0 25px 0 0' data={subjects} getItem={getItem}/>
        <Button text="Novo" backgroundColor={ButtonColors.primary} maxWidth={'30%'}/>
      </Header>
    </FormContainer>
  )
}

export default SubjectsRegisterPage;