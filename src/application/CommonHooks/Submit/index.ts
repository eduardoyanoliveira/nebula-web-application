import { FormEvent } from "react";
import submitPatch from "./submitPatch";
import submitPost from "./submitPost";
import { IHTTPPatchClient } from '../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../Domain/HTTPRequestsClient/IHTTPPostClient';

interface IHandleSubmitProps<T> {
    url: string,
    item: T,
    httpPostClient: IHTTPPostClient,
    httpPatchClient: IHTTPPatchClient
};

async function handleSubmit<T extends { id?: string }>(e : FormEvent, { 
    url,
    item, 
    httpPatchClient, 
    httpPostClient,
} : IHandleSubmitProps<T> ){

    e.preventDefault();

    if(item.id){
        await submitPatch({ url, item, httpPatchClient });
    }else{
        await submitPost({ url, item, httpPostClient });
    };

    window.location.reload();
};

export { handleSubmit };