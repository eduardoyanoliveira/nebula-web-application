import { useContext, useEffect, useState } from 'react';
import { useStaleWhileRevalidate } from '../../application/hooks/useStaleWhileRevalidate';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import AutoComplete from '../../components/AutoComplete';
import { IAutoCompleteData } from '../../components/AutoComplete/interfaces/autocomplete-data-interfaces';
import ToggleInput from '../../components/Inputs/ToggleInput';
import { ThemeContext } from '../../styles/themeProvider';
import { PageContainer } from './styles';


type User = {
  id: string,
  username: string,
  email: string,
  role: string,
  is_active: boolean,
  created_at: Date,
  updated_at: Date
};

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);

function TestPage() {

  const { data: usersData, isFetching, error } = useStaleWhileRevalidate<User[]>('users', httpAxiosGetClient, 10);
  const [users, setUsers] = useState<IAutoCompleteData[]>([]);

  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    setUsers([]);
    usersData?.forEach((user : User) => {
      setUsers((prev) => [
        ...prev,
        {
          id: user.id,
          name: user.username
        }
      ]);
    });
  }, [usersData]);

  const getValue = (value: boolean) => {
    console.log(value)
  }

  return (
    <PageContainer>
      {isFetching && <h1>Carregando</h1>}
      <AutoComplete name='users' getItem={(item) => console.log(item)} data={users} maxWidth={'350px'} margin='20px 0'/>
     <button onClick={toggleTheme}>Troca Tema</button>
     <ToggleInput id="toggle" initialValue={true} getValue={getValue}/>

    </PageContainer>
  )
}

export default TestPage;
