import { useContext } from 'react';
import { ThemeContext } from '../../styles/themeProvider';
import { MainContainer, Container, Label, Title, Toggle } from './styles';
import { BsCheckLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import  ButtonComponent from '../../components/Buttons/Button';
import { ButtonColors } from '../../components/Buttons/Button/ButtonColors';
import { getUserCredentials } from '../../application/useCases/UserCredentials';

const credentialsResponse = getUserCredentials.execute();

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
        credentialsResponse.getValue().role === 'ADMIN' ? (
          <Container>
            <ButtonComponent 
              backgroundColor={ButtonColors.primaryGradient} 
              text={'Cadastrar usuário'}
              onClick={() => navigate('/users/register')}
            />
          </Container>
        ) 
        :
        (
          <Container>
            <ButtonComponent 
              backgroundColor={ButtonColors.primaryGradient} 
              text={'Editar usuário'}
              onClick={() => navigate(`/users/edit/`)}
            />
          </Container>
        )
      }

    </MainContainer>
  );
};

export default SettingsPage;