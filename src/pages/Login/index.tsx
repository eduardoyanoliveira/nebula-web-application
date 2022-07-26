import { useState, FormEvent } from "react";
import InputComponent from "../../components/Input";
import { ButtonColors } from '../../Typescript/enums';
import  ButtonComponent  from '../../components/Button';
import { Screen, FormContainer, Title } from "./styles";
import { HTTPAxiosPostClient } from "../../application/Infra/HTTPClients/Axios/http-axios-post-client";
import { axiosInstance } from "../../application/Infra/HTTPClients/Axios/axios-instance";
// import useLogin, { ILoginRequestProps} from "../../application/hooks/Login/use-login";
// import { httpAxiosPostClientFactory } from "../../application/Infra/HTTPClients/Axios/http-axios-post-client";

const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance)

function LoginPage() {

  // const { ha} = useLogin(httpAxiosPostClient);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  async function handleSubmit (e : FormEvent){
    e.preventDefault();

    const result = await httpAxiosPostClient.post('sessions', formData);

    if(result.isFailure){
      console.log(result.error);
    }else{

      console.log(result.getValue());
    };

  };

  return (
    <Screen size="xs">
        <FormContainer width="md" method="POST">
            <Title>
                Login
            </Title>
            <InputComponent 
                type="email"
                name="email" 
                label="Email:" 
                placeholder="Email" 
                maxWidth={'345px'}
                margin=" 0 0 30px 0"
                onChange={handleChange}
            />

            <InputComponent 
                type="password"
                name="password" 
                label="Senha:" 
                placeholder="Senha" 
                maxWidth={'345px'}
                margin=" 0 0 30px 0"
                onChange={handleChange}
            />

            <ButtonComponent 
                text="Logar"
                maxWidth={'345px'}
                backgroundColor={ButtonColors.primaryGradient}
                onClick={handleSubmit}
                margin=" 10px 0 0 0"
            />
        </FormContainer>
    </Screen>
  );
};

export default LoginPage;