import { useState } from "react";
import { ISubject } from "../../../Domain/Entities/ISubject";
import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import { useStaleWhileRevalidate } from "../../../hooks/useStaleWhileRevalidate";


const SubjectsListAndFilter = (httpGetClient: IHTTPGetClient) => {
  
  const [search, setSearch] = useState<string>('');
    
  const { data, isFetching, error } = useStaleWhileRevalidate<ISubject[]>('subjects', httpGetClient, 30);

  const filteredSubjects = search.length > 0
    ? data?.filter(subject => subject.name.includes(search))
    : data;

  return { search, setSearch, isFetching, error, filteredSubjects };
};

export default SubjectsListAndFilter;