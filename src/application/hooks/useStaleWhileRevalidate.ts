import { useState, useEffect, useCallback } from "react";
import { IHTTPGetClient } from "../Domain/HTTPRequestsClient/IHTTPGetClient";
import { secondsElapsed } from "../utils/date/secondsElapsed";

interface IRequestCache {
    url: string,
    data: any,
    at: Date
};

const CACHE : IRequestCache[] = [];

function updateCacheRequest({ url, data, at }: IRequestCache): void{
    const index = CACHE.findIndex(request => request.url === url);

    if(index < 0){
        CACHE.push({ url, data, at }); 
    };

    CACHE[index] = { url, data, at };
};

/**
 * Uses StaleTimeRevalidate Principle to make and cache http get requests
 * @param url to make request
 * @param httpGetClient A client capable of making get requests (axios, fetch)
 * @param staleTime necessary time elapsed since last time the specif request was made to be considered stale 
 * @returns data from request, isFatching, error
 */
export function useStaleWhileRevalidate<T = any >(url: string, httpGetClient : IHTTPGetClient, staleTime: number) {

    const [data, setData] =  useState<T | null>(null);
    const [ isFetching, setIsFetching ] = useState(true);
    const [error, setError] = useState<null | undefined | string>(null);

    const fetch = useCallback(async () => {

        const request = CACHE.find(request => request.url === url);
        let elapsedTime = 0;

        // If request is cached calculates the elapsed time since last request
        if(request !== undefined){
            elapsedTime = secondsElapsed(request.at, new Date());
        };

        // Cancel data fetching if it is not staled
        if(elapsedTime < staleTime && elapsedTime !== 0) return;

        console.log(CACHE)

        const response = await httpGetClient.get(url, () => setIsFetching(false));

        if(response.isFailure){
            setError(response.error);
            return;
        };

        updateCacheRequest({
            url,
            data: response.getValue().data,
            at: new Date()
        });

        setData(response.getValue().data);
    },[url, httpGetClient, staleTime]);

    useEffect(() => {

        const request = CACHE.find(request => request.url === url);

        // look in cache and set response if present
        if (request !== undefined) {
            setData(request.data);
            setIsFetching(false);
        } else {
            // else make sure loading set to true
            setIsFetching(true);
        };

        // Only refetaches if the request is not in cache or the staleTime has been passed
        fetch();

    }, [fetch, url]);  


    useEffect(() => {
        window.addEventListener('focus', () => {
            // refetch
            fetch();
        });

        return window.removeEventListener('focus', fetch)
    },[fetch])

    return { data, isFetching, error };
};
