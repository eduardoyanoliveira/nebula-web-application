import { useState } from "react";
import { IHTTPGetClient } from "../Domain/HTTPRequestsClient/IHTTPGetClient";
import useGet from "./useGet";

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param field use to be filter.
 * @param url to get the list.
 * @param urlParams a string of url params to help filter data
 */
function useFilter<T extends { [index: string] : any }>(
  httpGetClient: IHTTPGetClient, 
  field: string, 
  url: string,
  urlParams?: string)
{
  
  const [search, setSearch] = useState<string>('');
    
  const { data, isFetching, error } = useGet<T[]>(
    httpGetClient, 
    url,
    urlParams,
    {
      staleTime: 1000 * 60 // 1 minute
    }
  );

  const filteredData = search.length > 0
    ? data?.filter(item => item[field].toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : data;

  return { search, setSearch, isFetching, error, filteredData };
};

export default useFilter;