import { useState } from "react";

/**
 * @param data to be filter
 * @param field use to be filter.
 */
function useFilter<T extends { [index: string] : any }>(
  data: T[],
  field: string, 
){
  
  const [search, setSearch] = useState<string>('');
    
  const filteredData = search.length > 0
    ? data?.filter(item => item[field].toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : data;

  return { search, setSearch, filteredData };
};

export default useFilter;