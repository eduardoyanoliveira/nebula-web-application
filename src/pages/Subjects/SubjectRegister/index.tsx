import AutoComplete from "../../../components/AutoComplete";
import Button from "../../../components/Buttons/Button";
import { ButtonColors } from "../../../components/Buttons/Button/ButtonColors";
import Form from "../../../components/FormComponents/Form";
import InputComponent from "../../../components/Inputs/Input";
import FormHeader from "../../../components/FormComponents/FormHeader";
import FormContainer from "../../../components/FormComponents/FormContainer";
import FormDateLabel from "../../../components/FormComponents/FormDateLabel";
import FormToggle from "../../../components/FormComponents/FormToggle";
import { useSubjectForm } from "../../../application/features/Subjects/useSubjectForm";
import { httpAxiosGetClient, httpAxiosPatchClient, httpAxiosPostClient } from "../../../application/Infra/axios";
import { ISubject } from "../../../application/Domain/Entities/ISubject";
import { baseSubject } from "../../../application/features/Subjects/data";
import { getSubjectByUrlId } from "../../../application/features/Subjects/getSubjectByUrlId";
import { submitSubject } from "../../../application/features/Subjects/submitSubject";
import useGet from "../../../application/CommonHooks/useGet";


function SubjectsRegisterPage() {

  const { data: subjects, isFetching } = useGet<ISubject[]>(httpAxiosGetClient, 'subjects');

  const  { subject } = getSubjectByUrlId(subjects as ISubject[]); 

  const {  
    current,
    setCurrent,
    handleChange,  
  } = useSubjectForm(subject as ISubject);

  return (
    <Form title="Cadastro de Tópicos">
      {
        !current.name && (
          <FormHeader>
            <AutoComplete 
              name="subjects" 
              data={subjects || []} 
              fieldToDisplay='name'
              getItem={(value : ISubject) => setCurrent((prev: ISubject) => prev = value)}
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
            getValue={(value: boolean) => setCurrent((prev) => prev = { ...prev, is_active: value })}
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
                onClick={(e) => submitSubject(e, { 
                  subject: current, 
                  httpPatchClient : httpAxiosPatchClient, 
                  httpPostClient : httpAxiosPostClient
                })}
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
      </FormContainer>
    </Form>
  );
};

export default SubjectsRegisterPage;
