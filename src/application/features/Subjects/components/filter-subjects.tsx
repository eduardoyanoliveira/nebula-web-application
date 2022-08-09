import { useState } from "react";
import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import ListSubjects from "./list-subjects";

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param onlyActive if true returns only the subjects if the attribute is_active equals to true
 * @returns a list of subjects : ISubject[]
 */
const FilterSubjects = (httpGetClient: IHTTPGetClient, onlyActive?: boolean) => {
  
  const [search, setSearch] = useState<string>('');
    
  const { subjects, isFetching, error } = ListSubjects(httpGetClient, onlyActive);

  const filteredSubjects = search.length > 0
    ? subjects?.filter(subject => subject.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : subjects;

  return { search, setSearch, isFetching, error, filteredSubjects };
};

export default FilterSubjects;