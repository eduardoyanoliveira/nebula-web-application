import CreateAndUpdateSubject from "../../application/features/Subjects/CreateAndUpdateSubject/create-and-update-subject";
import AutoComplete from "../../components/AutoComplete";
import Button from "../../components/Buttons/Button";
import { ButtonColors } from "../../components/Buttons/Button/ButtonColors";
import Form from "../../components/FormComponents/Form";
import InputComponent from "../../components/Inputs/Input";
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import { HTTPAxiosPatchClient } from '../../application/Infra/axios/http-axios-patch-client';
import { HTTPAxiosPostClient } from '../../application/Infra/axios/http-axios-post-client';
import FormHeader from "../../components/FormComponents/FormHeader";
import FormContainer from "../../components/FormComponents/FormContainer";
import FormDateLabel from "../../components/FormComponents/FormDateLabel";
import FormToggle from "../../components/FormComponents/FormToggle";

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);
const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);
const httpAxiosPatchClient = new HTTPAxiosPatchClient(axiosInstance);


function SubjectsRegisterPage() {

  const { 
    subjects, 
    current, 
    resetForm, 
    handleChange, 
    toggleActive,
    getItem, 
    handleSubmit 
  } = CreateAndUpdateSubject(httpAxiosGetClient, httpAxiosPostClient, httpAxiosPatchClient);

  return (
    <Form title="Cadastro de Tópicos">
      {
        !current.name && (
          <FormHeader>
            <AutoComplete 
              name="subjects" 
              data={subjects || []} 
              fieldToDisplay='name'
              getItem={getItem}
            />
          </FormHeader>
        )
      }
      <FormContainer 
          justifyContent={current.name ? 'space-between' : 'flex-end'}
          padding={'0 15px'}
        >
          {
            current.name && (
              <FormDateLabel
                dateLabel='Data de Cadastro'
                date= {current.created_at 
                  ? new Date((current.created_at as Date)).toLocaleString('pt-BR')
                  : new Date().toLocaleString('pt-BR')
                }
              />
            )
          }
          <FormToggle 
            id='toggle' 
            toggleLabel='Ativo?' 
            initialValue={current?.is_active} 
            getValue={toggleActive}
          />
      </FormContainer>

      <FormContainer>
        <InputComponent 
          type={"text"} 
          name="name" 
          label="Nome" 
          placeholder="Nome" 
          value={current?.name || ''}
          onChange={handleChange}
        />
      </FormContainer>
      <FormContainer>
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
                onClick={resetForm}
              />
            </>
          )
        }
      </FormContainer>
    </Form>
  );
};

export default SubjectsRegisterPage;