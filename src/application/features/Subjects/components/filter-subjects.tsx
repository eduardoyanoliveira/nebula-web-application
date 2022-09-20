import { useState } from "react";
import { ISubject } from "../../../Domain/Entities/ISubject";
import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import useGet from "../../../hooks/useGet";


/**
 * @param httpGetClient The http get client to make get request to the api
 * @param urlParams a string of url params to help filter data
 * @returns a list of subjects : ISubject[]
 */
const FilterSubjects = (httpGetClient: IHTTPGetClient, urlParams?: string) => {
  
  const [search, setSearch] = useState<string>('');
    
  const { data: subjects, isFetching, error } = useGet<ISubject[]>(httpGetClient, 'subjects', urlParams);

  const filteredSubjects = search.length > 0
    ? subjects?.filter(subject => subject.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : subjects;

  return { search, setSearch, isFetching, error, filteredSubjects };
};

export default FilterSubjects;