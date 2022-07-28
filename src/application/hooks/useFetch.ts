// import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { IHTTPGetClient } from "../Domain/HTTPRequestsClient/IHTTPGetClient";


export function useFetch<T = any >(url: string, httpGetClient : IHTTPGetClient) {

    const [data, setData] =  useState<T | null>(null);
    const [ isFetching, setIsFetching ] = useState(true);
    const [error, setError] = useState<null | undefined | string>(null);

    const fetch = useCallback(async () => {
        const response = await httpGetClient.get(url, () => setIsFetching(false));

        if(response.isFailure){
            setError(response.error);
            return;
        };

        setData(response.getValue().data);
    },[url, httpGetClient]);

    useEffect(() => {
        fetch();
    }, [fetch]);  

    useEffect(() => {
        window.addEventListener('focus', () => {
            // refetch
            fetch();
        });

        return window.removeEventListener('focus', fetch)
    },[fetch])

    return { data, isFetching, error };
};

// export function useFetch<T = any >(url: string, options?: AxiosRequestConfig) {

//     const [data, setData] =  useState<T | null>(null);
//     const [ isFetching, setIsFetching ] = useState(true);

//     useEffect(() => {

//         axios.get(url, options)
//         .then(response => {
//             setData(response.data);
//         })
//         .finally(() => {
//             setIsFetching(false);
//         });

//     }, [url, options]);  

//     useEffect(() => {
//         window.addEventListener('focus', () => {
//             // refetch
//         });

//         // return window.removeEventListener('focus')
//     },[])

//     return { data, isFetching };
// };