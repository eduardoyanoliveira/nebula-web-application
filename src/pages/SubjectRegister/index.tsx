import CreateAndUpdateSubject from "../../application/features/Subjects/components/create-and-update-subject";
import AutoComplete from "../../components/AutoComplete";
import Button from "../../components/Buttons/Button";
import { ButtonColors } from "../../components/Buttons/Button/ButtonColors";
import FormContainer from "../../components/Form/Contianer";
import InputComponent from "../../components/Inputs/Input";
import ToggleInput from "../../components/Inputs/ToggleInput";
import { Header, Container, RegisterLabel, IsActiveContainer, IsActiveLabel } from "./styles";


function SubjectsRegisterPage() {

  const { baseSubject, data, current, setCurrent, handleChange, toggleActive, getItem, handleSubmit } = CreateAndUpdateSubject();

  return (
    <FormContainer title="Cadastro de Tópicos">
      {
        !current.name && (
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
      <Container style={{justifyContent: `${current.name ? 'space-between' : 'flex-end'}`, padding: '0 15px'}}>
        {
          current.name && (
            <RegisterLabel>
              Data de Cadastro: {new Date((current.created_at as Date)).toLocaleString('pt-BR')}
            </RegisterLabel>
          )
        }
          <IsActiveContainer>
            <IsActiveLabel> Ativo?</IsActiveLabel>
            <ToggleInput id="toggle" initialValue={current?.is_active} getValue={toggleActive}/>
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
          current.name && (
            <>
              <Button 
                text="Gravar" 
                backgroundColor={ButtonColors.secondary} 
                onClick={handleSubmit}
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