import React, { FormEvent, useState } from 'react'
import Form from '../../../components/FormComponents/Form';
import AutoComplete from '../../../components/AutoComplete';
import ListUsers from '../../../application/features/Users/components/list-users';
import { HTTPAxiosGetClient } from '../../../application/Infra/axios/http-axios-get-client';
import { axiosInstance } from '../../../application/Infra/axios/axios-instance';
import { IUser } from '../../../application/Domain/Entities/IUser';
import InputComponent from '../../../components/Inputs/Input';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import { useNavigate } from 'react-router-dom';
import { HTTPAxiosPostClient } from '../../../application/Infra/axios/http-axios-post-client';
import { HTTPAxiosPatchClient } from '../../../application/Infra/axios/http-axios-patch-client';
import FormHeader from '../../../components/FormComponents/FormHeader';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormToggle from '../../../components/FormComponents/FormToggle';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';

const httpGetClient = new HTTPAxiosGetClient(axiosInstance);
const httpPostClient = new HTTPAxiosPostClient(axiosInstance);
const httpPatchClient = new HTTPAxiosPatchClient(axiosInstance);

const baseUser = {
    id: '',
    username: '',
    email: '',
    password: '',
    photo: '',
    role: 'USER',
    is_active: true,
}

function UserRegisterPage() {

    const navigate = useNavigate();

    const { isFetching, error, users } = ListUsers(httpGetClient);

    const [current, setCurrent] = useState<IUser>(baseUser);

    const toggleActive = (value: boolean) => {
        setCurrent((prev) => prev = { ...prev, is_active: value });
    };

    const getItem = (value: IUser) => {
        setCurrent((prev) => prev = value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
        ...current,
        [e.target.name]: e.target.value
        });
    };

    
  const handleSubmit = async (e : FormEvent) => {

    e.preventDefault();

    if(!current.id){
      const response = await httpPostClient.post('subjects', current);

      if(response.isFailure){
        return alert(response.error)
      };
    }else{
      const response = await httpPatchClient.patch(`subjects/${current.id}`, current);

      if(response.isFailure){
        return alert(response.error)
      };
    };

    navigate('/subjects');

    window.location.reload();
  };

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
                            date= {new Date((current.created_at as Date)).toLocaleString('pt-BR')}
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