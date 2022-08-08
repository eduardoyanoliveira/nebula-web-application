import { useContext } from 'react';
import ToggleInput from '../../components/Inputs/ToggleInput';
import { ThemeContext } from '../../styles/themeProvider';
import { PageContainer } from './styles';



function TestPage() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <PageContainer>
     <button onClick={toggleTheme}>Troca Tema</button>
     <div style={{margin: '0 20px'}}></div>
     <ToggleInput id={"toggle"} />
    </PageContainer>
  )
}

export default TestPage;
