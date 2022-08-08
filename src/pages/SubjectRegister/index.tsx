import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ISubject } from "../../application/Domain/Entities/ISubject";
import { useStaleWhileRevalidate } from "../../application/hooks/useStaleWhileRevalidate";
import { axiosInstance } from "../../application/Infra/axios/axios-instance";
import { HTTPAxiosGetClient } from "../../application/Infra/axios/http-axios-get-client";
import AutoComplete from "../../components/AutoComplete";
import Button from "../../components/Buttons/Button";
import { ButtonColors } from "../../components/Buttons/Button/ButtonColors";
import FormContainer from "../../components/Form/Contianer";
import InputComponent from "../../components/Inputs/Input";
import ToggleInput from "../../components/Inputs/ToggleInput";
import { Header, Container, RegisterLabel, IsActiveContainer, IsActiveLabel } from "./styles";

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);

const baseSubject : ISubject = {
  id: '',
  name: '',
  is_active: false,
  created_at: new Date(),
  updated_at: new Date(),
};

function SubjectsRegisterPage() {
  
  const { data, isFetching, error } = useStaleWhileRevalidate<ISubject[]>('subjects', httpAxiosGetClient, 60, false);

  const [current, setCurrent] = useState<ISubject>(baseSubject);

  const isMounted = useRef(true);

  const params = useParams();


  useEffect(() => {
    if(isMounted.current){
      setCurrent((prev) => prev = data?.find(item => item.id === params.id) as ISubject || prev);
    };
  },[params.id, data]);

  const getItem = (value: ISubject) => {
    setCurrent((prev) => prev = value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setCurrent({
      ...current,
      [e.target.name]: e.target.value
    });
  };

  return (
    <FormContainer title="Cadastro de Tópicos">
      {
        !current.id && (
          <Header>
            <AutoComplete 
              name="subjects" 
              data={data || []} 
              fieldToDisplay='name'
              getItem={getItem}
            />
          </Header>
        )
      }
      <Container style={{justifyContent: `${current.id ? 'space-between' : 'flex-end'}`, padding: '0 15px'}}>
        {
          current.id && (
            <RegisterLabel>
              Data de Cadastro: {new Date((current.created_at as Date)).toLocaleString('pt-BR')}
            </RegisterLabel>
          )
        }
          <IsActiveContainer>
            <IsActiveLabel> Ativo?</IsActiveLabel>
            <ToggleInput id="toggle" initialValue={current?.is_active}/>
          </IsActiveContainer>
      </Container>

      <Container>
        <InputComponent 
          type={"text"} 
          name="name" 
          label="Nome" 
          placeholder="Nome" 
          value={current?.name || ''}
          onChange={handleChange}
        />
      </Container>
      <Container>
        {
          current.id && (
            <>
              <Button 
                text="Gravar" 
                backgroundColor={ButtonColors.secondary} 
                margin='0 20px 0 0'
              />
              <Button 
                text="Cancelar" 
                backgroundColor={ButtonColors.primary} 
                onClick={() => setCurrent(baseSubject)}
              />
            </>
          )
        }
      </Container>
    </FormContainer>
  )
}

export default SubjectsRegisterPage;