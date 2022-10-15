import { useContext } from 'react';
import ToggleInputWithFunction from '../../components/Inputs/ToggleInput/WithFunction'; 
import { ThemeContext } from '../../styles/themeProvider';
import { MainContainer, Container, Label, Title } from './styles';
import { userCredentials } from '../../application/useCases/UserCredentials';
import { useNavigate } from 'react-router-dom';
import  ButtonComponent from '../../components/Buttons/Button';
import { ButtonColors } from '../../components/Buttons/Button/ButtonColors';

function SettingsPage() {

  const navigate = useNavigate();

  const { toggleTheme } = useContext(ThemeContext);

  return (

    <MainContainer>
      <Title>Settings</Title>

      <Container>
        <Label>Tema escuro?</Label>
        <ToggleInputWithFunction 
          margin='0 20px 0 0' 
          onClick={toggleTheme}
        />
      </Container>

      {
        userCredentials.role === 'ADMIN' && (
          <Container>
            <ButtonComponent 
              backgroundColor={ButtonColors.primaryGradient} 
              text={'Cadastrar usuário'}
              onClick={() => navigate('/users/register')}
            />
          </Container>
        )
      }

    </MainContainer>
  );
};

export default SettingsPage;