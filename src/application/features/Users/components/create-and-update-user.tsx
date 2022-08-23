import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../../../Domain/Entities/IUser';
import { IHTTPGetClient } from '../../../Domain/HTTPRequestsClient/IHTTPGetClient';
import { IHTTPPatchClient } from '../../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../../Domain/HTTPRequestsClient/IHTTPPostClient';
import ListUsers from './list-users';

interface IEditableUser extends IUser{
  password?: string
};

const baseUser = {
  id: '',
  username: '',
  email: '',
  password: '',
  photo: '',
  role: 'USER',
  is_active: true,
};


function CreateAndUpdateUser(httpGetClient: IHTTPGetClient, httpPostClient: IHTTPPostClient, httpPatchClient: IHTTPPatchClient) {

  const navigate = useNavigate();

  const { users, isFetching } = ListUsers(httpGetClient);


  const [current, setCurrent] = useState<IEditableUser>(baseUser);

  const isMounted = useRef(true);

  const params = useParams();


  useEffect(() => {
    if(isMounted.current){
      setCurrent((prev) => prev = users?.find(item => item.id === params.id) as IEditableUser || prev);
    };
  },[params.id, users]);

  const getItem = (value: IEditableUser) => {
    setCurrent((prev) => prev = value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setCurrent({
      ...current,
      [e.target.name]: e.target.value
    });
  };

  const toggleActive = (value: boolean) => {
    setCurrent((prev) => prev = { ...prev, is_active: value });
  };

  const handleSubmit = async (e : FormEvent) => {

    e.preventDefault();

    if(!current.id){
      const response = await httpPostClient.post('users', current);

      if(response.isFailure){
        return alert(response.error)
      };
    }else{
      const response = await httpPatchClient.patch(`users/${current.id}`, current);

      if(response.isFailure){
        return alert(response.error)
      };
    };

    navigate('/');

    window.location.reload();
  };

  return { 
    baseUser, 
    isFetching,
    users, 
    current, 
    setCurrent, 
    handleChange, 
    getItem, 
    toggleActive, 
    handleSubmit 
  };
};

export default CreateAndUpdateUser;