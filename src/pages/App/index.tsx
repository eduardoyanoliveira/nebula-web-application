import { useFetch } from '../../application/hooks/useFetch';
import { axiosInstance } from '../../application/Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../application/Infra/axios/http-axios-get-client';

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

  const { data, isFetching, error } = useFetch<User[]>('users', httpAxiosGetClient);

  return (
    <div>
      {isFetching ? <h1>Carregando</h1> : (
        <div>
          {
            data?.map((user) => {
              return (
                <>
                  <h1>{user.username}</h1>
                  <h2>{user.email}</h2>
                </>
              )
            })
          }
        </div>
      )}
    
    </div>
  )
}

export default App;
