import InputComponent from "../../components/Input";
import { ButtonColors } from '../../components/Button/ButtonColors';
import  ButtonComponent  from '../../components/Button';
import { Screen, FormContainer, Title } from "./styles";
import LoginComponent from "../../application/features/Authentication/components/login-component";
import { useContext } from "react";
import { AuthContext } from "../../application/features/Authentication/contexts/AuthContext";

function LoginPage() {
  
  const { signIn } = useContext(AuthContext);

  const { handleChange, onSubmit } = LoginComponent(signIn);

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