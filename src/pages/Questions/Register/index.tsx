import AutoComplete from "../../../components/AutoComplete";
import Button from "../../../components/Buttons/Button";
import { ButtonColors } from "../../../components/Buttons/Button/ButtonColors";
import Form from "../../../components/FormComponents/Form";
import InputComponent from "../../../components/Inputs/Input";
import { axiosInstance } from '../../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../../application/Infra/axios/http-axios-get-client';
import { HTTPAxiosPatchClient } from '../../../application/Infra/axios/http-axios-patch-client';
import { HTTPAxiosPostClient } from '../../../application/Infra/axios/http-axios-post-client';
import FormHeader from "../../../components/FormComponents/FormHeader";
import FormContainer from "../../../components/FormComponents/FormContainer";
import FormDateLabel from "../../../components/FormComponents/FormDateLabel";
import FormToggle from "../../../components/FormComponents/FormToggle";
import CreateAndUpdateQuestion from "../../../application/features/Questions/CreateQuestion/create-and-update-question";
import TextBox from "../../../components/Inputs/TextBox";
import useGet from "../../../application/hooks/useGet";
import { ISubject } from "../../../application/Domain/Entities/ISubject";

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);
const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);
const httpAxiosPatchClient = new HTTPAxiosPatchClient(axiosInstance);


function QuestionRegisterPage() {

  const { 
    questions, 
    current, 
    resetForm, 
    handleChange, 
    togglePublic,
    getItem, 
    getSubject,
    handleSubmit 
  } = CreateAndUpdateQuestion(httpAxiosGetClient, httpAxiosPostClient, httpAxiosPatchClient);

  const { data: subjects } = useGet<ISubject[]>(httpAxiosGetClient, 'subjects', 'is_active=true');

  return (
    <Form title="Cadastro de Pergunta">
      {
        !current.title && (
          <FormHeader>
            <AutoComplete 
              name="questions" 
              data={questions || []} 
              fieldToDisplay='title'
              getItem={getItem}
            />
          </FormHeader>
        )
      }
      <FormContainer 
          justifyContent={current.title ? 'space-between' : 'flex-end'}
          padding={'0 15px'}
        >
          {
            current.title && (
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
            toggleLabel='Pública?' 
            initialValue={current?.is_public} 
            getValue={togglePublic}
          />
      </FormContainer>

        <FormContainer>
            <AutoComplete 
                name="subjects" 
                label="Tópico"
                initialValue={current?.subject?.name}
                data={subjects || []} 
                fieldToDisplay='name'
                getItem={getSubject}
                placeholder={'Tópico'}
                displayIcon={false}
            />
        </FormContainer>

      <FormContainer>
        <InputComponent 
          type={"text"} 
          name="title" 
          label="Título" 
          placeholder="Título" 
          value={current?.title || ''}
          onChange={handleChange}
        />
      </FormContainer>

      <FormContainer>
        <TextBox  
            name="text"
            label="Texto" 
            placeholder="Sua Pergunta" 
            value={current?.text || ''}
            onChange={handleChange}
        />
      </FormContainer>  
      <FormContainer>
        {
          current.title && (
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

export default QuestionRegisterPage;