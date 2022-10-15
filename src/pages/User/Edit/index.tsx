import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormToggle from '../../../components/FormComponents/FormToggle';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';
import FileInput from '../../../components/Inputs/FileInput';

import InputComponent from '../../../components/Inputs/Input';

import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';

import useUserForm from '../../../application/features/Users/useUserForm';
import { handleUserSubmit } from '../../../application/features/Users/handleUserSubmit';

import { httpAxiosMultipartPatchClient, httpAxiosMultipartPostClient, httpAxiosPatchClient } from '../../../application/Infra/axios';
import { IEditableUser } from '../../../application/features/Users/interface';
import { getUserCredentials } from '../../../application/useCases/UserCredentials';
import { FormEvent } from 'react';

const userResponse = getUserCredentials.execute();

function UserEditPage() {

    const user = userResponse.getValue();

    const {
        current, 
        setCurrent, 
        handleChange, 
        url,
        handleFile,
        resetForm
    } = useUserForm(user as IEditableUser);

    const onSubmit = async (e: FormEvent) => {

        await handleUserSubmit(e, {
            item: current,
            httpMultipartPostClient: httpAxiosMultipartPostClient,
            httpMultipartPatchClient: httpAxiosMultipartPatchClient,
            httpPatchClient: httpAxiosPatchClient
        });

        localStorage.setItem('@user', JSON.stringify(current));
    };

    console.log(current)

    return (
        <Form title='Cadastro de Usuário' hasImages={true}>
           
            <FormContainer 
                justifyContent={user?.username ? 'space-between' : 'flex-end'}
                padding={'0 15px'}
            >
                {
                    user?.username && (
                        <FormDateLabel
                            dateLabel='Data de Cadastro'
                            date= {current.created_at 
                                ? new Date((user?.created_at as Date)).toLocaleString('pt-BR')
                                : new Date().toLocaleString('pt-BR')
                            }
                        />
                    )
                }
                <FormToggle 
                    id='toggle' 
                    toggleLabel='Ativo?' 
                    initialValue={user?.is_active} 
                    getValue={(value: boolean) => setCurrent((prev) => prev = { ...prev, is_active: value })}
                />
            </FormContainer>

            <FormContainer>
                <FileInput
                    alt={user?.username}
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
                value={user?.username || ''}
                onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                type={"email"} 
                name="email" 
                label="Email" 
                placeholder="Email" 
                value={user?.email || ''}
                onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                {
                    user?.username && (
                        <>
                            <Button 
                                text="Gravar" 
                                backgroundColor={ButtonColors.secondary} 
                                onClick={onSubmit}
                                margin='0 20px 0 0'
                            />

                            {
                                !user && (
                                    <Button 
                                        text="Cancelar" 
                                        backgroundColor={ButtonColors.primary} 
                                        onClick={resetForm}
                                    />
                                )
                            }
                        </>
                    )
                }
            </FormContainer>
        </Form>
    );
};

export default UserEditPage