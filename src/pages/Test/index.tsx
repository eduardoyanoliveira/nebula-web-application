import { useContext } from 'react';
import { ThemeContext } from '../../styles/themeProvider';
import { PageContainer } from './styles';



function TestPage() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <PageContainer>
     <button onClick={toggleTheme}>Troca Tema</button>
    </PageContainer>
  )
}

export default TestPage;
