import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ISubject } from '../../../Domain/Entities/ISubject';
import { IHTTPGetClient } from '../../../Domain/HTTPRequestsClient/IHTTPGetClient';
import { IHTTPPatchClient } from '../../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../../Domain/HTTPRequestsClient/IHTTPPostClient';
import handleSubmit from '../../hooks/handleSubmit';
import useGetByUrlId from '../../hooks/useGetByUrlId';
import { baseSubject } from '../data';
import ListSubjects from '../components/list-subjects';


function CreateAndUpdateSubject(httpGetClient: IHTTPGetClient, httpPostClient: IHTTPPostClient, httpPatchClient: IHTTPPatchClient) {

  const navigate = useNavigate();

  const { subjects, isFetching } = ListSubjects(httpGetClient);

  const [current, setCurrent] = useState<ISubject>(baseSubject);

  useGetByUrlId<ISubject>({ setItem: setCurrent, data: subjects });

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

  const resetForm = () => {
    setCurrent(baseSubject);
  };

  const thisHandleSubmit = async (e : FormEvent) => {

    e.preventDefault();

    await handleSubmit<ISubject>({ url: 'subjects', item: current, httpPatchClient, httpPostClient });

    navigate('/subjects');

    window.location.reload();
  };

  return { 
    isFetching,
    subjects, 
    current, 
    resetForm, 
    handleChange, 
    getItem, 
    toggleActive, 
    handleSubmit : thisHandleSubmit
  };
};

export default CreateAndUpdateSubject;