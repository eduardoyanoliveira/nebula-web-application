import { contains } from "./contains";

/**
 * @param obj : The object to search;
 * @param attr : Which attr on object to search;
 * @param value : The value used to search on the field;
 * @returns true if this specific atribute's value on give object contains the value searched
 */
function objectContains<T = any>(obj : T, attr: string, value: string) : boolean {

    if(!Object.keys(obj).some((key) => key === attr)) throw new Error('No key matches on the data');

    return  contains(String((obj as any)[attr]), value);
};

export { objectContains };