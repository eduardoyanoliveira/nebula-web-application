import { IAutoCompleteData } from "../interfaces/autocomplete-data-interfaces";
import { objectContains } from "./objectContains";

/**
 * @param attr The atribute on the objects that the value will be searched.
 * @param value Value to be searched
 * @param data Object list with the objects to be filtered.
 * @returns the objects that the specific atribute contains the value 
 */

export const listObjectContains = (attr: string, value : string, data: IAutoCompleteData[]) : IAutoCompleteData[] => {
    if(value === '%') return data;
  
    attr = attr.toLowerCase();
    value = value.toLowerCase();
  
    return data.filter((obj) => objectContains(obj, attr, value));
}