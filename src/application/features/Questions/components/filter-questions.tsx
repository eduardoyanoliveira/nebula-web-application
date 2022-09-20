import { useState } from "react";
import { IQuestion } from "../../../Domain/Entities/IQuestion";
import { IHTTPGetClient } from "../../../Domain/HTTPRequestsClient/IHTTPGetClient";
import useGet from "../../../hooks/useGet";

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param urlParams a string of url params to help filter data
 * @returns a list of questions : IQuestions[]
 */
const FilterQuestions = (httpGetClient: IHTTPGetClient, urlParams?: string) => {
  
  const [search, setSearch] = useState<string>('');
    
  const { data: questions, isFetching, error } = useGet<IQuestion[]>(
    httpGetClient, 
    'questions',
    urlParams,
    {
      staleTime: 1000 * 60 // 1 minute
    }
  );

  const filteredQuestions = search.length > 0
    ? questions?.filter(subject => subject.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : questions;

  return { search, setSearch, isFetching, error, filteredQuestions };
};

export default FilterQuestions;