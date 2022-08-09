import { useQuery } from '@tanstack/react-query';
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ISubject } from '../../../Domain/Entities/ISubject';
import { axiosInstance } from '../../../Infra/axios/axios-instance';
import { HTTPAxiosGetClient } from '../../../Infra/axios/http-axios-get-client';
import { HTTPAxiosPatchClient } from '../../../Infra/axios/http-axios-patch-client';
import { HTTPAxiosPostClient } from '../../../Infra/axios/http-axios-post-client';

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);
const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);
const httpAxiosPatchClient = new HTTPAxiosPatchClient(axiosInstance);

const baseSubject : ISubject = {
  id: '',
  name: '',
  is_active: true,
};


function CreateAndUpdateSubject() {

  const navigate = useNavigate();

  const { data, isFetching, error } = useQuery<ISubject[]>(['subjects'], async () => {
    const response = await httpAxiosGetClient.get('subjects');

    if(response.isFailure){
      console.log('error');
    };

    return response.getValue().data;
  })

  const [current, setCurrent] = useState<ISubject>(baseSubject);

  const isMounted = useRef(true);

  const params = useParams();


  useEffect(() => {
    if(isMounted.current){
      setCurrent((prev) => prev = data?.find(item => item.id === params.id) as ISubject || prev);
    };
  },[params.id, data]);

  const getItem = (value: ISubject) => {
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
      const response = await httpAxiosPostClient.post('subjects', current);

      if(response.isFailure){
        return alert(response.error)
      };
    }else{
      const response = await httpAxiosPatchClient.patch(`subjects/${current.id}`, current);

      if(response.isFailure){
        return alert(response.error)
      };
    };


    navigate('/subjects');

    window.location.reload();
  };

  return { baseSubject, data, current, setCurrent, handleChange, getItem, toggleActive, handleSubmit };
}

export default CreateAndUpdateSubject;