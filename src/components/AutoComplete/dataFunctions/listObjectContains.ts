import { objectContains } from "./objectContains";

/**
 * @param attr The atribute on the objects that the value will be searched.
 * @param value Value to be searched
 * @param data Object list with the objects to be filtered.
 * @returns the objects that the specific atribute contains the value 
 */

export function listObjectContains<T>(attr: string, value : string, data: T[]) : T[] {
    if(value === '%') return data;
  
    attr = attr.toLowerCase();
    value = value.toLowerCase();
  
    return data.filter((obj) => objectContains(obj, attr, value));
}