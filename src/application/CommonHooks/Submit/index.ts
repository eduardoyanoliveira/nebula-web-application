import { FormEvent } from "react";
import submitPatch from "./submitPatch";
import submitPost from "./submitPost";
import { IHTTPPatchClient } from '../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../Domain/HTTPRequestsClient/IHTTPPostClient';

interface IHandleSubmitProps<T> {
    url: string,
    item: T,
    httpPostClient: IHTTPPostClient,
    httpPatchClient: IHTTPPatchClient,
    callbackFn?(): void,
    reloadPage?: boolean;
};

async function handleSubmit<T extends { id?: string }>(e : FormEvent, { 
    url,
    item, 
    httpPatchClient, 
    httpPostClient,
    callbackFn,
    reloadPage = true
} : IHandleSubmitProps<T> ){

    e.preventDefault();

    if(item.id){
        await submitPatch({ url, item, httpPatchClient });
    }else{
        await submitPost({ url, item, httpPostClient });
    };

    if(callbackFn) callbackFn();

    if(reloadPage) window.location.reload();
};

export { handleSubmit };