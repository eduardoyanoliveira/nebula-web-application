import Form from '../../../components/FormComponents/Form';
import AutoComplete from '../../../components/AutoComplete';
import { HTTPAxiosGetClient } from '../../../application/Infra/axios/http-axios-get-client';
import { axiosInstance, axiosInstanceMultipart } from '../../../application/Infra/axios/axios-instance';
import InputComponent from '../../../components/Inputs/Input';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import { HTTPAxiosPostClient } from '../../../application/Infra/axios/http-axios-post-client';
import { HTTPAxiosPatchClient } from '../../../application/Infra/axios/http-axios-patch-client';
import FormHeader from '../../../components/FormComponents/FormHeader';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormToggle from '../../../components/FormComponents/FormToggle';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';
import CreateAndUpdateUser from '../../../application/features/Users/components/create-and-update-user';
import FileInput from '../../../components/Inputs/FileInput';

const httpGetClient = new HTTPAxiosGetClient(axiosInstance);
const httpPostClient = new HTTPAxiosPostClient(axiosInstance);
const httpPatchClient = new HTTPAxiosPatchClient(axiosInstance);
const httpMultipartPatchClient = new HTTPAxiosPatchClient(axiosInstanceMultipart);

function UserRegisterPage() {

    const {
        baseUser, 
        error,
        isFetching,
        users, 
        url,
        current, 
        setCurrent, 
        handleFile,
        handleChange, 
        getItem, 
        toggleActive, 
        handleSubmit 
    } = CreateAndUpdateUser(httpGetClient, httpPostClient, httpPatchClient, httpMultipartPatchClient);


    const fileUrl = current.photo ? `http://localhost:3333/files/${current?.photo}` : '';

    return (
        <Form title='Cadastro de Usuário' hasImages={true}>
            <FormHeader>
                <AutoComplete 
                    name='users'
                    data={users || []}
                    fieldToDisplay='username'
                    getItem={getItem}
                />
            </FormHeader>
            <FormContainer 
                justifyContent={current.username ? 'space-between' : 'flex-end'}
                padding={'0 15px'}
            >
                {
                    current.username && (
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
                <FileInput
                    alt={current?.username}
                    url={url || fileUrl}
                    handleChange={handleFile}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                type={"text"} 
                name="username" 
                label="Nome de Usuário" 
                placeholder="Nome de Usuário" 
                value={current?.username || ''}
                onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                type={"email"} 
                name="email" 
                label="Email" 
                placeholder="Email" 
                value={current?.email || ''}
                onChange={handleChange}
                />
            </FormContainer>

            {
                !current?.id  && (
                    <FormContainer>
                        <InputComponent 
                        type={"password"} 
                        name="password" 
                        label="Senha" 
                        placeholder="Senha" 
                        value={current?.password || ''}
                        onChange={handleChange}
                        />
                    </FormContainer>
                )
            }
           

            <FormContainer>
                {
                current.username && (
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
                        onClick={() => setCurrent(baseUser)}
                    />
                    </>
                )
                }
            </FormContainer>
        </Form>
    );
};

export default UserRegisterPage