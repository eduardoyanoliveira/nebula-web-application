export interface IBaseObject {
    id: string,
    name: string,
    [index:string]: string | boolean | number,
};