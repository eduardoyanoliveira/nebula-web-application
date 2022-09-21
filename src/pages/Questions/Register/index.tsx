import AutoComplete from "../../../components/AutoComplete";
import Button from "../../../components/Buttons/Button";
import { ButtonColors } from "../../../components/Buttons/Button/ButtonColors";
import Form from "../../../components/FormComponents/Form";
import InputComponent from "../../../components/Inputs/Input";
import FormHeader from "../../../components/FormComponents/FormHeader";
import FormContainer from "../../../components/FormComponents/FormContainer";
import FormDateLabel from "../../../components/FormComponents/FormDateLabel";
import FormToggle from "../../../components/FormComponents/FormToggle";
import TextBox from "../../../components/Inputs/TextBox";
import useGet from "../../../application/CommonHooks/useGet";
import { ISubject } from "../../../application/Domain/Entities/ISubject";
import { handleSubmit } from "../../../application/CommonHooks/Submit";
import baseQuestion from "../../../application/features/Questions/data";
import useQuestionForm from "../../../application/features/Questions/useQuestionForm";
import { httpAxiosGetClient, httpAxiosPatchClient, httpAxiosPostClient } from "../../../application/Infra/axios";
import { IQuestion } from "../../../application/Domain/Entities/IQuestion";
import { getUserCredentials } from "../../../application/useCases/UserCredentials";


const credentialsResponse = getUserCredentials.execute();

function QuestionRegisterPage() {

  const { data: questions, isFetching, error } = useGet<IQuestion[]>(
    httpAxiosGetClient, 
    'questions',
    `author=$id$${credentialsResponse.getValue().id}`,
    {
      staleTime: 1000 * 60 // 1 minute
    }
  );

  const {
    current, 
    setCurrent,
    handleChange, 
  } = useQuestionForm();

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
              getItem={(value: IQuestion) => setCurrent((prev) => prev = value)}
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
            getValue={(value: boolean) => setCurrent((prev) => prev = { ...prev, is_public: value })}
          />
      </FormContainer>

        <FormContainer>
            <AutoComplete 
                name="subjects" 
                label="Tópico"
                initialValue={current?.subject?.name}
                data={subjects || []} 
                fieldToDisplay='name'
                getItem={(value: ISubject) => setCurrent((prev) => prev = { ...prev, subject: value as ISubject })}
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
                onClick={(e) => handleSubmit(e, { 
                  url: 'questions',
                  item: current, 
                  httpPatchClient : httpAxiosPatchClient, 
                  httpPostClient : httpAxiosPostClient
                })}
                margin='0 20px 0 0'
              />
              <Button 
                text="Cancelar" 
                backgroundColor={ButtonColors.primary} 
                onClick={() => setCurrent(baseQuestion)}
              />
            </>
          )
        }
      </FormContainer>
    </Form>
  );
};

export default QuestionRegisterPage;