import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ISubject } from '../../../Domain/Entities/ISubject';
import { IHTTPGetClient } from '../../../Domain/HTTPRequestsClient/IHTTPGetClient';
import { IHTTPPatchClient } from '../../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../../Domain/HTTPRequestsClient/IHTTPPostClient';
import ListSubjects from './list-subjects';


const baseSubject : ISubject = {
  id: '',
  name: '',
  is_active: true,
};


function CreateAndUpdateSubject(httpGetClient: IHTTPGetClient, httpPostClient: IHTTPPostClient, httpPatchClient: IHTTPPatchClient) {

  const navigate = useNavigate();

  const { subjects, isFetching } = ListSubjects(httpGetClient);


  const [current, setCurrent] = useState<ISubject>(baseSubject);

  const isMounted = useRef(true);

  const params = useParams();


  useEffect(() => {
    if(isMounted.current){
      setCurrent((prev) => prev = subjects?.find(item => item.id === params.id) as ISubject || prev);
    };
  },[params.id, subjects]);

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
      const response = await httpPostClient.post('subjects', current);

      if(response.isFailure){
        return alert(response.error)
      };
    }else{
      const response = await httpPatchClient.patch(`subjects/${current.id}`, current);

      if(response.isFailure){
        return alert(response.error)
      };
    };

    navigate('/subjects');

    window.location.reload();
  };

  return { 
    baseSubject, 
    isFetching,
    subjects, 
    current, 
    setCurrent, 
    handleChange, 
    getItem, 
    toggleActive, 
    handleSubmit 
  };
};

export default CreateAndUpdateSubject;