/**
 * @param src : A string to be search;
 * @param value : The value used to search on the string src;
 * @returns true if the string 'src' contains the value searched
 */
const contains = (src: string, value: string) : boolean => {
    return  String(src).toLowerCase().indexOf(value) >= 0 ;
};

export { contains };