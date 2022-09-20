import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IUser } from '../../../Domain/Entities/IUser';
import { IHTTPGetClient } from '../../../Domain/HTTPRequestsClient/IHTTPGetClient';
import { IHTTPPatchClient } from '../../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../../Domain/HTTPRequestsClient/IHTTPPostClient';
import useGet from '../../../hooks/useGet';
import useGetByUrlId from '../../../hooks/useGetByUrlId';

interface IEditableUser extends IUser{
  password?: string,
  file: string | File
};

const baseUser = {
  id: '',
  username: '',
  email: '',
  password: '',
  photo: '',
  file: '',
  role: 'USER',
  is_active: true,
};


function CreateAndUpdateUser(
  httpGetClient: IHTTPGetClient, 
  httpMultipartPostClient: IHTTPPostClient, 
  httpPatchClient: IHTTPPatchClient,
  httpMultipartPatchClient: IHTTPPatchClient
) {


  const { data: users, error, isFetching } = useGet<IUser[]>(
    httpGetClient,
    'users',
    '',
    {
      staleTime: 1000 * 60 // 1 minute
    }
  );


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

  const [url, setUrl] = useState('');

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return;

    const image = e.target.files[0];

    if(!image) return;

    if(image.type === 'image/jpeg' || image.type === 'image/png'){
      setCurrent((prev) => prev = { ...prev, file: image });
      setUrl(URL.createObjectURL(image));
    };
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

      const response = await httpMultipartPostClient.post('users', current);

      if(response.isFailure){
        return alert(response.error)
      };

    }else{

      const { id, photo, file, ...jsonFileds } = current;

      const jsonResponse = await httpPatchClient.patch(`users/${current.id}`, jsonFileds);

      if(jsonResponse.isFailure){
        return alert(jsonResponse.error);
      };

      const fileResponse = await httpMultipartPatchClient.patch(`users/${current.id}`, { photo, file });

      if(fileResponse.isFailure){
        return alert(fileResponse.error);
      };

      
    };

    window.location.reload();
  };

  return { 
    baseUser, 
    error,
    isFetching,
    users, 
    url,
    current, 
    setCurrent, 
    handleFile,
    handleChange, 
    getItem, 
    toggleActive, 
    handleSubmit 
  };
};

export default CreateAndUpdateUser;