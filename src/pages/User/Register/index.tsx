import Form from '../../../components/FormComponents/Form';
import FormHeader from '../../../components/FormComponents/FormHeader';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormToggle from '../../../components/FormComponents/FormToggle';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';
import FileInput from '../../../components/Inputs/FileInput';

import AutoComplete from '../../../components/AutoComplete';
import InputComponent from '../../../components/Inputs/Input';

import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';

import { IUser } from '../../../application/Domain/Entities/IUser';
import useUserForm from '../../../application/features/Users/useUserForm';
import { handleUserSubmit } from '../../../application/features/Users/handleUserSubmit';
import useGet from '../../../application/CommonHooks/useGet';

import { httpAxiosGetClient, httpAxiosMultipartPatchClient, httpAxiosMultipartPostClient, httpAxiosPatchClient } from '../../../application/Infra/axios';

function UserRegisterPage() {

    const { data: users, error, isFetching } = useGet<IUser[]>(
        httpAxiosGetClient,
        'users',
        '',
        {
            staleTime: 1000 * 60 // 1 minute
        }
    );

    const {
        current, 
        setCurrent, 
        handleChange, 
        url,
        handleFile,
        getItem,
        resetForm
    } = useUserForm();

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
                    getValue={(value: boolean) => setCurrent((prev) => prev = { ...prev, is_active: value })}
                />
            </FormContainer>

            <FormContainer>
                <FileInput
                    alt={current?.username}
                    url={url}
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
                            onClick={(e) => handleUserSubmit(e, {
                                item: current,
                                httpMultipartPostClient: httpAxiosMultipartPostClient,
                                httpMultipartPatchClient: httpAxiosMultipartPatchClient,
                                httpPatchClient: httpAxiosPatchClient
                            })}
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

export default UserRegisterPage