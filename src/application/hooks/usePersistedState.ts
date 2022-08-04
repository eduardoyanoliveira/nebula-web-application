import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { IGetItemFromCache } from "../Domain/Cache/IGetItemFromCache";
import { ISaveItemOnCache } from "../Domain/Cache/ISaveItemOnCache";

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(
    key: string, 
    initialState: T, 
    getItemFromCache: IGetItemFromCache<T>,
    saveItemOnCache: ISaveItemOnCache<T>
) : Response<T> {
    const [state, setState] = useState<T>(() => {

        const response = getItemFromCache.execute(key);

        if(response.isFailure){
            return initialState;
        };

        return JSON.parse(response.getValue() as string);
    });

    useEffect(() => {
        saveItemOnCache.execute(key, state);
    },[state, key, saveItemOnCache]);

    return [state, setState];
};

export default usePersistedState;