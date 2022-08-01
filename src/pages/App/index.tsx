import { useEffect, useState } from 'react';
import { useFetch } from '../../application/hooks/useFetch';
import { useStaleWhileRevalidate } from '../../application/hooks/useStaleWhileRevalidate';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';
import AutoComplete from '../../components/AutoComplete';
import { IAutoCompleteData } from '../../components/AutoComplete/component';


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

function App() {

  const { data: usersData, isFetching, error } = useStaleWhileRevalidate<User[]>('users', httpAxiosGetClient, 10);
  const [users, setUsers] = useState<IAutoCompleteData[]>([]);

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

  return (
    <div style={{backgroundColor: '#ccc', height: '100vh'}}>
      {isFetching && <h1>Carregando</h1>}
      <AutoComplete name='users' getItem={(item) => console.log(item)} data={users} />
      <>
       
      </>

    </div>
  )
}

export default App;
