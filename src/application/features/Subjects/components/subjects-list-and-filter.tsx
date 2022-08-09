import { useState } from "react";
import { ISubject } from "../../../Domain/Entities/ISubject";
import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import { useQuery } from '@tanstack/react-query';


const SubjectsListAndFilter = (httpGetClient: IHTTPGetClient) => {
  
  const [search, setSearch] = useState<string>('');
    
  const { data, isFetching, error } = useQuery<ISubject[]>(['subjects'], async () => {
    const response = await httpGetClient.get('subjects');

    if(response.isFailure){
      console.log('error');
    };

    return response.getValue().data;
  },{
    staleTime: 1000 * 60 // 1 minute
  });

  const filteredSubjects = search.length > 0
    ? data?.filter(subject => subject.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : data;

  return { search, setSearch, isFetching, error, filteredSubjects };
};

export default SubjectsListAndFilter;