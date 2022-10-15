import { useContext } from 'react';
import { ThemeContext } from '../../styles/themeProvider';
import { MainContainer, Container, Label, Title, Toggle } from './styles';
import { BsCheckLg } from 'react-icons/bs';
import { userCredentials } from '../../application/useCases/UserCredentials';
import { useNavigate } from 'react-router-dom';
import  ButtonComponent from '../../components/Buttons/Button';
import { ButtonColors } from '../../components/Buttons/Button/ButtonColors';

function SettingsPage() {

  const navigate = useNavigate();

  const { toggleDark, toggleTheme, isDarkTheme, isNebulaTheme } = useContext(ThemeContext);

  return (

    <MainContainer>
      <Title>Configurações:</Title>

      <Container>
        <Label>Tema escuro?</Label>
        <Toggle 
          isToggled={isDarkTheme}
          onClick={toggleDark}
        > 
          {
            isDarkTheme && <BsCheckLg/>
          }
        </Toggle>
      </Container>

      <Container>
        <Label>Utilizar tema BlueSky?</Label>
        <Toggle 
          isToggled={!isNebulaTheme}
          onClick={toggleTheme}
        > 
          {
            !isNebulaTheme && <BsCheckLg/>
          }
        </Toggle>
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