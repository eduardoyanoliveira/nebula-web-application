import InputComponent from "../../components/Input";
import { ButtonColors } from '../../Typescript/enums';
import  ButtonComponent  from '../../components/Button';
import { Screen, FormContainer, Title } from "./styles";
import LoginComponent from "../../application/features/Authentication/components/login-component";


function LoginPage() {

  const { handleChange, onSubmit } = LoginComponent();

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
          onClick={onSubmit}
          margin=" 10px 0 0 0"
        />
      </FormContainer>
    </Screen>
  );
};

export default LoginPage;